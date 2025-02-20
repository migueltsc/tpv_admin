
import React from 'react';
import { Create, SimpleForm, NumberInput, TextInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Tax_typesCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/tax_types'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source="name" />
<NumberInput source="percentage" />
            </SimpleForm>
        </Create>
    );
};

export default Tax_typesCreate;
  