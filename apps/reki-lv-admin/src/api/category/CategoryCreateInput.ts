import { ListingCreateNestedManyWithoutCategoriesInput } from "./ListingCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  listings?: ListingCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
