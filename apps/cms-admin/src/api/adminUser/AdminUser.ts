export type AdminUser = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string | null;
  password: string | null;
  email: string | null;
};
