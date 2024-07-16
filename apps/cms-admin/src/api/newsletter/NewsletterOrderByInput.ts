import { SortOrder } from "../../util/SortOrder";

export type NewsletterOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  subject?: SortOrder;
  content?: SortOrder;
  recipients?: SortOrder;
  sendDate?: SortOrder;
};
