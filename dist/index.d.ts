export type TagsList = string[];
export type Tags = {
    tags: TagsList;
};
export type LocationTags = Tags & {
    icon: string;
};
export type ProfileTags = Tags;
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
    expiration?: Date;
    createdAt: Date;
    updatedAt: Date;
};
export type Location = LocationFields<string>;
