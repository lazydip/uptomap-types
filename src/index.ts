// tags

export type TagsList = string[];

export type Tags = { tags: TagsList };

export type LocationTags = Tags & { icon: string };
export type ProfileTags = Tags;

export const TAG_SCOPE = ["profile", "location", "unexpected"] as const;
export type TagsExructionScope = (typeof TAG_SCOPE)[number];

// locations
// Common
export type Address = {
  line1: string;
  line2?: string;
  city: string;
  region?: string;
  postalCode?: string;
  country: string;
};

// Location types
export const LOCATION_TYPES = ["user", "mark", "live"] as const;
export type LocationType = (typeof LOCATION_TYPES)[number];
