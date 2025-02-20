
import React from 'react';
import { Create, SimpleForm, NumberInput, TextInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const FamiliesCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/families'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source="name" />
<TextInput source="image_url" />
<TextInput source="color" />
            </SimpleForm>
        </Create>
    );
};

export default FamiliesCreate;
  