
import React from 'react';
import { Create, SimpleForm, NumberInput, TextInput, ReferenceInput, SelectInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const EntitiesCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/entities'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
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
        </Create>
    );
};

export default EntitiesCreate;
  