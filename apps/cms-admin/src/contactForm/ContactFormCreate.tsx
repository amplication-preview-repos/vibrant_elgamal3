import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ContactFormCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Message" multiline source="message" />
        <DateTimeInput label="SubmittedAt" source="submittedAt" />
      </SimpleForm>
    </Create>
  );
};
