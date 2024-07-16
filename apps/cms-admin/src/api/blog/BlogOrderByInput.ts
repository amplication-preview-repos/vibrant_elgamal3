import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  author?: SortOrder;
  publishDate?: SortOrder;
  url?: SortOrder;
};
