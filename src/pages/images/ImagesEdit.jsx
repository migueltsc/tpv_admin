
import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput } from 'react-admin';

const ImagesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="filename" />
<TextInput source="url" />
<TextInput source="real_url" />
        </SimpleForm>
    </Edit>
);

export default ImagesEdit;
  