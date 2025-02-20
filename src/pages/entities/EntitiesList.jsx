
import React from 'react';
import {
    List,
    Datagrid,
    NumberField, TextField, ReferenceField,
    SearchInput,
    ReferenceInput,
    SelectInput,
    Filter,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';

const EntitiesFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="entity_type_id" reference="entity_types" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const EntitiesList = () => (
    <List filters={EntitiesFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="alias" />
            <ReferenceField source="entity_type_id" reference="entity_types"><TextField source="name" /></ReferenceField>
            <TextField source="address" />
            <TextField source="zip_code" />
            <TextField source="city" />
            <TextField source="province" />
            <TextField source="country" />
            <TextField source="phone" />
            <TextField source="email" />
            <TextField source="tax_id" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default EntitiesList;
