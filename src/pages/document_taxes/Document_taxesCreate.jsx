
import React from 'react';
import { Create, SimpleForm, NumberInput, ReferenceInput, SelectInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Document_taxesCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/document_taxes'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <ReferenceInput source="document_id" reference="document_headers"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="tax_type_id" reference="tax_types"><SelectInput optionText="name" /></ReferenceInput>
<NumberInput source="base" />
<NumberInput source="tax" />
<NumberInput source="total" />
            </SimpleForm>
        </Create>
    );
};

export default Document_taxesCreate;
  