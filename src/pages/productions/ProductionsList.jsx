
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

const ProductionsFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="product_id" reference="products" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const ProductionsList = () => (
    <List filters={ProductionsFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
            <TextField source="production_date" />
            <NumberField source="quantity" />
            <TextField source="production_hour" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default ProductionsList;
