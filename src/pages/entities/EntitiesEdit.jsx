
import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput, ReferenceInput, SelectInput } from 'react-admin';

const EntitiesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
<TextInput source="alias" />
<ReferenceInput source="entity_type_id" reference="entity_types"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="address" />
<TextInput source="zip_code" />
<TextInput source="city" />
<TextInput source="province" />
<TextInput source="country" />
<TextInput source="phone" />
<TextInput source="email" />
<TextInput source="tax_id" />
        </SimpleForm>
    </Edit>
);

export default EntitiesEdit;
  