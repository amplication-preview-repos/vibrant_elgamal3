import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NewsletterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Subject" source="subject" />
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Recipients" multiline source="recipients" />
        <DateTimeInput label="SendDate" source="sendDate" />
      </SimpleForm>
    </Create>
  );
};
