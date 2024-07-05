import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  listings?: ListingListRelationFilter;
  name?: StringNullableFilter;
};
