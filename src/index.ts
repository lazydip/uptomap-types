// tags

export type TagsList = string[];
export type Tags = { tags: TagsList };

export type LocationTags = Tags & { icon: string };

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

export type LocationFields<UserIdType> = {
  user: UserIdType;
  type: LocationType;
  title?: string;
  userText: string;
  tags: TagsList;
  location: {
    type: "Point";
    coordinates: [number, number]; // [lng, lat]
  };
  address?: Address;
  icon?: string;
  deleted?: boolean;
  default: boolean;
  expiration?: Date;
  createdAt: Date;
  updatedAt: Date;
};
export type Location = LocationFields<string>;

export type Profile = {
  originalText: string;
  correctedText: string;
  tags: TagsList;
};

export const USER_ROLES = ["user", "admin"] as const;
export type UserRole = (typeof USER_ROLES)[number];

export type UserFields<UserIdType> = {
  name: string;
  email: string;
  role: UserRole;
  password: string;
  active: boolean;
  profileData?: Profile;
};

export type User = UserFields<string>;

// messages
export type MessageFields<IdType> = {
  location: IdType;
  user: IdType;
  text: string;
  parent?: IdType;
  deleted: boolean;
  edited: boolean;

  createdAt: Date;
  updatedAt: Date;
};

export type Message = MessageFields<string>;
