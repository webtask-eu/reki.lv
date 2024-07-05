import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
