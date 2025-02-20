
import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput } from 'react-admin';

const RolesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export default RolesEdit;
  