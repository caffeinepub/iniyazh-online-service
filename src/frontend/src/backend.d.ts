import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type UserId = Principal;
export type OptionalSortMethod = SortMethod | null;
export interface ContactSubmission {
    id: bigint;
    userId: UserId;
    data: ContactSubmissionData;
    timestamp: bigint;
}
export type Phone = string;
export interface ContactSubmissionData {
    subject: string;
    name: string;
    email?: Email;
    message: string;
    phone: Phone;
}
export interface UserProfile {
    name: string;
}
export type Email = string;
export enum SortMethod {
    byName = "byName",
    byPhone = "byPhone"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllSubmissions(sortedBy: OptionalSortMethod): Promise<Array<ContactSubmission>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getSubmissionById(id: bigint): Promise<ContactSubmission>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitContactForm(name: string, phone: Phone, email: Email | null, subject: string, message: string): Promise<string>;
}
