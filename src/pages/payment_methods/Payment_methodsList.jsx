
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

const Payment_methodsFilter = [
    <SearchInput source="q" alwaysOn />,

];

const Payment_methodsList = () => (
    <List filters={Payment_methodsFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default Payment_methodsList;
