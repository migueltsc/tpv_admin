
import React from 'react';
import { Create, SimpleForm, NumberInput, TextInput, ReferenceInput, SelectInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Document_headersCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/document_headers'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source="date" />
<TextInput source="number" />
<NumberInput source="discount_percentage" />
<NumberInput source="discount_amount" />
<NumberInput source="total_tax" />
<ReferenceInput source="entity_id" reference="entities"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="entity_address" />
<TextInput source="entity_zip_code" />
<TextInput source="entity_city" />
<TextInput source="entity_province" />
<TextInput source="entity_region" />
<TextInput source="entity_country" />
<TextInput source="entity_tax_id" />
<ReferenceInput source="document_type_id" reference="document_types"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="observations" />
<ReferenceInput source="user_id" reference="users"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="document_status_id" reference="document_statuses"><SelectInput optionText="name" /></ReferenceInput>
            </SimpleForm>
        </Create>
    );
};

export default Document_headersCreate;
  