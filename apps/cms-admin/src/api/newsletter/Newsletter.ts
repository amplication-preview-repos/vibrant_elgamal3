export type Newsletter = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  subject: string | null;
  content: string | null;
  recipients: string | null;
  sendDate: Date | null;
};
