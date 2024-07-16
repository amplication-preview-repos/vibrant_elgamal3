import { AdminUser as TAdminUser } from "../api/adminUser/AdminUser";

export const ADMINUSER_TITLE_FIELD = "username";

export const AdminUserTitle = (record: TAdminUser): string => {
  return record.username?.toString() || String(record.id);
};
