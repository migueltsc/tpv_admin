
import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput } from 'react-admin';

const Entity_typesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
<TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export default Entity_typesEdit;
  