import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PodcastVideoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="URL" source="url" />
        <DateTimeInput label="PublishDate" source="publishDate" />
      </SimpleForm>
    </Create>
  );
};
