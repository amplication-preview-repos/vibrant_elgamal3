import { SortOrder } from "../../util/SortOrder";

export type AdminUserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
};
