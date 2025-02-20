
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

const Document_statusesFilter = [
    <SearchInput source="q" alwaysOn />,

];

const Document_statusesList = () => (
    <List filters={Document_statusesFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default Document_statusesList;
