
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

const Document_linesFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="document_header_id" reference="document_headers" alwaysOn><SelectInput optionText="name" /></ReferenceInput>,
    <ReferenceInput source="product_id" reference="products" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const Document_linesList = () => (
    <List filters={Document_linesFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="document_header_id" reference="document_headers"><TextField source="name" /></ReferenceField>
            <ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
            <TextField source="product_name" />
            <NumberField source="product_quantity" />
            <NumberField source="product_price" />
            <NumberField source="tax_percentage" />
            <NumberField source="tax_amount" />
            <TextField source="tax_description" />
            <NumberField source="discount_percentage" />
            <NumberField source="discount_amount" />
            <TextField source="discount_description" />
            <NumberField source="line_total" />
            <TextField source="line_order" />
            <TextField source="line_type" />
            <TextField source="line_observations" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default Document_linesList;
