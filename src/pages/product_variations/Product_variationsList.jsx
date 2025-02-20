
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

const Product_variationsFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="product_id" reference="products" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const Product_variationsList = () => (
    <List filters={Product_variationsFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="price" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default Product_variationsList;
