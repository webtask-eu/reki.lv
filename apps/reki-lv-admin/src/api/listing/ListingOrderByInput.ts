import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
