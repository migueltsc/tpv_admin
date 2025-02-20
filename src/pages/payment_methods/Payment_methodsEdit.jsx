
import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput } from 'react-admin';

const Payment_methodsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export default Payment_methodsEdit;
  