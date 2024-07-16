import { NewsletterWhereInput } from "./NewsletterWhereInput";
import { NewsletterOrderByInput } from "./NewsletterOrderByInput";

export type NewsletterFindManyArgs = {
  where?: NewsletterWhereInput;
  orderBy?: Array<NewsletterOrderByInput>;
  skip?: number;
  take?: number;
};
