import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AdminUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Username" source="username" />
        <TextInput label="Password" source="password" />
        <TextInput label="Email" source="email" type="email" />
      </SimpleForm>
    </Edit>
  );
};
