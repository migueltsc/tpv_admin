
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

const Payment_linesFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="payment_header_id" reference="payment_headers" alwaysOn><SelectInput optionText="name" /></ReferenceInput>,
    <ReferenceInput source="payment_method_id" reference="payment_methods" alwaysOn><SelectInput optionText="name" /></ReferenceInput>,
    <ReferenceInput source="entity_id" reference="entities" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const Payment_linesList = () => (
    <List filters={Payment_linesFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="payment_header_id" reference="payment_headers"><TextField source="name" /></ReferenceField>
            <ReferenceField source="payment_method_id" reference="payment_methods"><TextField source="name" /></ReferenceField>
            <ReferenceField source="entity_id" reference="entities"><TextField source="name" /></ReferenceField>
            <NumberField source="amount" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default Payment_linesList;
