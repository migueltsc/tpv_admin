import React from 'react';
import { Create, SimpleForm, TextInput, EmailField, ReferenceInput, SelectInput, ArrayInput, SimpleFormIterator } from 'react-admin';

const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="password" />
            <ReferenceInput source="role_id" reference="roles">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export default UserCreate;
