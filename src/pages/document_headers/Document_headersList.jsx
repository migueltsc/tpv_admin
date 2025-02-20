
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

const Document_headersFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="entity_id" reference="entities" alwaysOn><SelectInput optionText="name" /></ReferenceInput>,
    <ReferenceInput source="document_type_id" reference="document_types" alwaysOn><SelectInput optionText="name" /></ReferenceInput>,
    <ReferenceInput source="user_id" reference="users" alwaysOn><SelectInput optionText="name" /></ReferenceInput>,
    <ReferenceInput source="document_status_id" reference="document_statuses" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const Document_headersList = () => (
    <List filters={Document_headersFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="date" />
            <TextField source="number" />
            <NumberField source="discount_percentage" />
            <NumberField source="discount_amount" />
            <NumberField source="total_tax" />
            <ReferenceField source="entity_id" reference="entities"><TextField source="name" /></ReferenceField>
            <TextField source="entity_address" />
            <TextField source="entity_zip_code" />
            <TextField source="entity_city" />
            <TextField source="entity_province" />
            <TextField source="entity_region" />
            <TextField source="entity_country" />
            <TextField source="entity_tax_id" />
            <ReferenceField source="document_type_id" reference="document_types"><TextField source="name" /></ReferenceField>
            <TextField source="observations" />
            <ReferenceField source="user_id" reference="users"><TextField source="name" /></ReferenceField>
            <ReferenceField source="document_status_id" reference="document_statuses"><TextField source="name" /></ReferenceField>
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default Document_headersList;
