import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NewsletterWhereInput = {
  id?: StringFilter;
  subject?: StringNullableFilter;
  content?: StringNullableFilter;
  recipients?: StringNullableFilter;
  sendDate?: DateTimeNullableFilter;
};
