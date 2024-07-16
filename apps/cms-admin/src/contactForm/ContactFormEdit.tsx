import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ContactFormEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Message" multiline source="message" />
        <DateTimeInput label="SubmittedAt" source="submittedAt" />
      </SimpleForm>
    </Edit>
  );
};
