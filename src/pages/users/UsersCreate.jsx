
import React from 'react';
import { Create, SimpleForm, NumberInput, TextInput, ReferenceInput, SelectInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const UsersCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/users'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source="name" />
<TextInput source="password" />
<TextInput source="email" />
<ReferenceInput source="role_id" reference="roles"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="image_url" />
            </SimpleForm>
        </Create>
    );
};

export default UsersCreate;
  