import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdminUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Username" source="username" />
        <TextInput label="Password" source="password" />
        <TextInput label="Email" source="email" type="email" />
      </SimpleForm>
    </Create>
  );
};
