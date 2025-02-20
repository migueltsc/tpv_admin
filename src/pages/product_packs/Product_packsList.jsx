
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

const Product_packsFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="product_id" reference="products" alwaysOn><SelectInput optionText="name" /></ReferenceInput>,
    <ReferenceInput source="component_product_id" reference="products" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const Product_packsList = () => (
    <List filters={Product_packsFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
            <ReferenceField source="component_product_id" reference="products"><TextField source="name" /></ReferenceField>
            <NumberField source="quantity" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default Product_packsList;
