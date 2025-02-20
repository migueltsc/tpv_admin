
import React from 'react';
import {
    List,
    Datagrid,
    NumberField, TextField, ImageField,
    SearchInput,
    ReferenceInput,
    SelectInput,
    Filter,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';

const FamiliesFilter = [
    <SearchInput source="q" alwaysOn />,

];

const FamiliesList = () => (
    <List filters={FamiliesFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="image_url" />
            <TextField source="color" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default FamiliesList;
