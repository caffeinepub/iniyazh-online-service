import Map "mo:core/Map";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";
import Time "mo:core/Time";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Email = Text;
  type Phone = Text;
  type UserId = Principal;

  type ContactSubmissionData = {
    name : Text;
    phone : Phone;
    email : ?Email;
    subject : Text;
    message : Text;
  };

  type ContactSubmission = {
    id : Nat;
    userId : UserId;
    data : ContactSubmissionData;
    timestamp : Int;
  };

  public type UserProfile = {
    name : Text;
  };

  module ContactSubmission {
    public func compare(s1 : ContactSubmission, s2 : ContactSubmission) : Order.Order {
      Nat.compare(s1.id, s2.id);
    };

    public func compareByName(s1 : ContactSubmission, s2 : ContactSubmission) : Order.Order {
      Text.compare(s1.data.name, s2.data.name);
    };
  };

  let submissionsMap = Map.empty<Nat, ContactSubmission>();
  var nextSubmissionId = 1;
  let userProfiles = Map.empty<Principal, UserProfile>();

  type OptionalSortMethod = ?SortMethod;

  public type SortMethod = {
    #byName;
    #byPhone;
  };

  func applySortMethod(submissions : [ContactSubmission], sortMethod : OptionalSortMethod) : [ContactSubmission] {
    switch (sortMethod) {
      case (null) { submissions };
      case (?method) {
        submissions.sort(
          func(a, b) {
            switch (method) {
              case (#byName) { Text.compare(a.data.name, b.data.name) };
              case (#byPhone) { Text.compare(a.data.phone, b.data.phone) };
            };
          }
        );
      };
    };
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public shared ({ caller }) func submitContactForm(name : Text, phone : Phone, email : ?Email, subject : Text, message : Text) : async Text {
    let submissionData : ContactSubmissionData = {
      name;
      phone;
      email;
      subject;
      message;
    };

    let submission : ContactSubmission = {
      id = nextSubmissionId;
      userId = caller;
      data = submissionData;
      timestamp = Time.now();
    };

    submissionsMap.add(nextSubmissionId, submission);
    nextSubmissionId += 1;
    "Contact submitted successfully";
  };

  public query ({ caller }) func getAllSubmissions(sortedBy : OptionalSortMethod) : async [ContactSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all submissions");
    };

    applySortMethod(submissionsMap.values().toArray(), sortedBy);
  };

  public query ({ caller }) func getSubmissionById(id : Nat) : async ContactSubmission {
    switch (submissionsMap.get(id)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) {
        if (not (AccessControl.isAdmin(accessControlState, caller)) and caller != submission.userId) {
          Runtime.trap("Unauthorized: Can only view your own submissions");
        };
        submission;
      };
    };
  };
};
