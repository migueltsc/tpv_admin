
import React from 'react';
import { Create, SimpleForm, NumberInput, TextInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RolesCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/roles'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    );
};

export default RolesCreate;
  