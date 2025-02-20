
import React from 'react';
import { Create, SimpleForm, NumberInput, TextInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Document_statusesCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/document_statuses'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source="name" />
<TextInput source="description" />
            </SimpleForm>
        </Create>
    );
};

export default Document_statusesCreate;
  