export type TagsList = string[];
export type Tags = {
    tags: TagsList;
};
export type LocationTags = Tags & {
    icon: string;
};
export type Address = {
    line1: string;
    line2?: string;
    city: string;
    region?: string;
    postalCode?: string;
    country: string;
};
export declare const LOCATION_TYPES: readonly ["user", "mark", "live"];
export type LocationType = (typeof LOCATION_TYPES)[number];
export type LocationFields<UserIdType> = {
    user: UserIdType;
    type: LocationType;
    title?: string;
    userText: string;
    tags: TagsList;
    location: {
        type: "Point";
        coordinates: [number, number];
    };
    address?: Address;
    icon?: string;
    deleted?: boolean;
    expiration?: Date;
    createdAt: Date;
    updatedAt: Date;
};
export type Location = LocationFields<string>;
export type Profile = {
    originalText: string;
    correctedText: string;
    tags: Tags;
};
export declare const USER_ROLES: readonly ["user", "admin"];
export type UserRole = (typeof USER_ROLES)[number];
export type UserFields<LocationIdType> = {
    name: string;
    email: string;
    role: UserRole;
    password: string;
    active: boolean;
    defaultLocation?: LocationIdType | null;
    profileData?: Profile;
};
export type User = UserFields<string>;
