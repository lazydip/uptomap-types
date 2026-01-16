// general types

type TimeStamps = {
  createdAt: Date;
  updatedAt: Date;
};

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
} & TimeStamps;
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
} & TimeStamps;

export type User = UserFields<string>;

// messages
export type MessageContainerType = "location" | "conversation";

export type MessageBaseFields<IdType> = {
  containerType: MessageContainerType;
  user: IdType;
  text: string;
  parent?: IdType;
  deleted: boolean;
  edited: boolean;
} & TimeStamps;

export type LocationMessageFields<IdType> = MessageBaseFields<IdType> & {
  containerType: "location";
  location: IdType;
  conversation?: never;
};

export type ConversationMessageFields<IdType> = MessageBaseFields<IdType> & {
  containerType: "conversation";
  conversation: IdType;
  location?: never;
};

export type MessageFields<IdType> =
  | LocationMessageFields<IdType>
  | ConversationMessageFields<IdType>;

export type Message = MessageFields<string>;
