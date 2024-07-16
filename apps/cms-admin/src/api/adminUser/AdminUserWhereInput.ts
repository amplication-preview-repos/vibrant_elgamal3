import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdminUserWhereInput = {
  id?: StringFilter;
  username?: StringNullableFilter;
  password?: StringNullableFilter;
  email?: StringNullableFilter;
};
