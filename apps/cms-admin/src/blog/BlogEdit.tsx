import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Author" source="author" />
        <DateTimeInput label="PublishDate" source="publishDate" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Edit>
  );
};
