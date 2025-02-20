
import React from 'react';
import {
    List,
    Datagrid,
    NumberField, ReferenceField, TextField,
    SearchInput,
    ReferenceInput,
    SelectInput,
    Filter,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';

const Payment_headersFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="document_header_id" reference="document_headers" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const Payment_headersList = () => (
    <List filters={Payment_headersFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="document_header_id" reference="document_headers"><TextField source="name" /></ReferenceField>
            <TextField source="payment_date" />
            <NumberField source="amount" />
            <TextField source="observations" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default Payment_headersList;
