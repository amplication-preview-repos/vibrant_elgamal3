import { AdminUserWhereInput } from "./AdminUserWhereInput";
import { AdminUserOrderByInput } from "./AdminUserOrderByInput";

export type AdminUserFindManyArgs = {
  where?: AdminUserWhereInput;
  orderBy?: Array<AdminUserOrderByInput>;
  skip?: number;
  take?: number;
};
