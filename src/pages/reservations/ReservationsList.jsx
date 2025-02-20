
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

const ReservationsFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="document_line_id" reference="document_lines" alwaysOn><SelectInput optionText="name" /></ReferenceInput>,
    <ReferenceInput source="product_id" reference="products" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const ReservationsList = () => (
    <List filters={ReservationsFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="document_line_id" reference="document_lines"><TextField source="name" /></ReferenceField>
            <ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
            <TextField source="date" />
            <NumberField source="quantity" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default ReservationsList;
