
import React from 'react';
import { Create, SimpleForm, NumberInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Payment_headersCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/payment_headers'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <ReferenceInput source="document_header_id" reference="document_headers"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="payment_date" />
<NumberInput source="amount" />
<TextInput source="observations" />
            </SimpleForm>
        </Create>
    );
};

export default Payment_headersCreate;
  