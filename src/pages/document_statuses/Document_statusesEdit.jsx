
import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput } from 'react-admin';

const Document_statusesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
<TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export default Document_statusesEdit;
  