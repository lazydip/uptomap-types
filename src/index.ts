export type TagsList = string[];

export type Tags = { tags: TagsList };

export type LocationTags = Tags & { icon: string };
export type ProfileTags = Tags;

export const TAG_SCOPE = ["profile", "location", "unexpected"] as const;
export type TagsExructionScope = (typeof TAG_SCOPE)[number];
