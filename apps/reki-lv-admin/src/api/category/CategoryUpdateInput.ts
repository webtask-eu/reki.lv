import { ListingUpdateManyWithoutCategoriesInput } from "./ListingUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  listings?: ListingUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
