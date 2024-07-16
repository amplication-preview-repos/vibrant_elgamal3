import { SortOrder } from "../../util/SortOrder";

export type ContactFormOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  message?: SortOrder;
  submittedAt?: SortOrder;
};
