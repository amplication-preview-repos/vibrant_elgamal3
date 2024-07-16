import { Newsletter as TNewsletter } from "../api/newsletter/Newsletter";

export const NEWSLETTER_TITLE_FIELD = "subject";

export const NewsletterTitle = (record: TNewsletter): string => {
  return record.subject?.toString() || String(record.id);
};
