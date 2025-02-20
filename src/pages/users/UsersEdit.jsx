
import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput, ReferenceInput, SelectInput } from 'react-admin';

const UsersEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
<TextInput source="password" />
<TextInput source="email" />
<ReferenceInput source="role_id" reference="roles"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="image_url" />
        </SimpleForm>
    </Edit>
);

export default UsersEdit;
  