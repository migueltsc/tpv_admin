
import React from 'react';
import {
    List,
    Datagrid,
    NumberField, TextField, ReferenceField, ImageField, BooleanField,
    SearchInput,
    ReferenceInput,
    SelectInput,
    Filter,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';

const ProductsFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="family_id" reference="families" alwaysOn><SelectInput optionText="name" /></ReferenceInput>,
    <ReferenceInput source="tax_type_id" reference="tax_types" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const ProductsList = () => (
    <List filters={ProductsFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="price" />
            <ReferenceField source="family_id" reference="families"><TextField source="name" /></ReferenceField>
            <ReferenceField source="tax_type_id" reference="tax_types"><TextField source="name" /></ReferenceField>
            <TextField source="image_url" />
            <BooleanField source="sold_by_weight" />
            <NumberField source="retail_price" />
            <NumberField source="tax_amount" />
            <NumberField source="cost" />
            <BooleanField source="is_composite" />
            <BooleanField source="is_variation" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default ProductsList;
