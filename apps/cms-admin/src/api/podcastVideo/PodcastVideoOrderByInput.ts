import { SortOrder } from "../../util/SortOrder";

export type PodcastVideoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  url?: SortOrder;
  publishDate?: SortOrder;
};
