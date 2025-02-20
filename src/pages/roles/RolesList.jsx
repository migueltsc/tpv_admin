
import React from 'react';
import {
    List,
    Datagrid,
    NumberField, TextField,
    SearchInput,
    ReferenceInput,
    SelectInput,
    Filter,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';

const RolesFilter = [
    <SearchInput source="q" alwaysOn />,

];

const RolesList = () => (
    <List filters={RolesFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default RolesList;
