import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { ListingUpdateManyWithoutUsersInput } from "./ListingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingUpdateManyWithoutUsersInput;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
