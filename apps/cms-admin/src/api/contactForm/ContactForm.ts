export type ContactForm = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  message: string | null;
  submittedAt: Date | null;
};
