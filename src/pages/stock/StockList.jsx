
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

const StockFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="product_id" reference="products" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const StockList = () => (
    <List filters={StockFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
            <TextField source="date" />
            <NumberField source="quantity" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default StockList;
