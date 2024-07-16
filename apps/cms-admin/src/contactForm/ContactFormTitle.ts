import { ContactForm as TContactForm } from "../api/contactForm/ContactForm";

export const CONTACTFORM_TITLE_FIELD = "name";

export const ContactFormTitle = (record: TContactForm): string => {
  return record.name?.toString() || String(record.id);
};
