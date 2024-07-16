import { ContactFormWhereInput } from "./ContactFormWhereInput";
import { ContactFormOrderByInput } from "./ContactFormOrderByInput";

export type ContactFormFindManyArgs = {
  where?: ContactFormWhereInput;
  orderBy?: Array<ContactFormOrderByInput>;
  skip?: number;
  take?: number;
};
