import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Author" source="author" />
        <DateTimeInput label="PublishDate" source="publishDate" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Create>
  );
};
