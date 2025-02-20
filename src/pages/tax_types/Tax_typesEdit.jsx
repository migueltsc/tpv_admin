
import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput } from 'react-admin';

const Tax_typesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
<NumberInput source="percentage" />
        </SimpleForm>
    </Edit>
);

export default Tax_typesEdit;
  