import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NewsletterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Subject" source="subject" />
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Recipients" multiline source="recipients" />
        <DateTimeInput label="SendDate" source="sendDate" />
      </SimpleForm>
    </Edit>
  );
};
