export type TagsList = string[];
export type Tags = {
    tags: TagsList;
};
export type LocationTags = Tags & {
    icon: string;
};
export type ProfileTags = Tags;
export declare const TAG_SCOPE: readonly ["profile", "location", "unexpected"];
export type TagsExructionScope = (typeof TAG_SCOPE)[number];
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
