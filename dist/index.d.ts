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
