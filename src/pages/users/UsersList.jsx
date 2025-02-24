
import React from 'react';
import {
    List,
    Datagrid,
    NumberField, TextField, ReferenceField, ImageField,
    SearchInput,
    ReferenceInput,
    SelectInput,
    Filter,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';

const UsersFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="role_id" reference="roles" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const UsersList = () => (
    <List filters={UsersFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="password" />
            <TextField source="email" />
            <ReferenceField source="role_id" reference="roles"><TextField source="name" /></ReferenceField>
            <TextField source="image_url" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default UsersList;
