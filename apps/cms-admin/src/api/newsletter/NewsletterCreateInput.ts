export type NewsletterCreateInput = {
  subject?: string | null;
  content?: string | null;
  recipients?: string | null;
  sendDate?: Date | null;
};
