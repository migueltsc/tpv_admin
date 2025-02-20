
import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput } from 'react-admin';

const FamiliesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
<TextInput source="image_url" />
<TextInput source="color" />
        </SimpleForm>
    </Edit>
);

export default FamiliesEdit;
  