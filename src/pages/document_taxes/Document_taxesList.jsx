
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

const Document_taxesFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="document_id" reference="document_headers" alwaysOn><SelectInput optionText="name" /></ReferenceInput>,
    <ReferenceInput source="tax_type_id" reference="tax_types" alwaysOn><SelectInput optionText="name" /></ReferenceInput>
];

const Document_taxesList = () => (
    <List filters={Document_taxesFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="document_id" reference="document_headers"><TextField source="name" /></ReferenceField>
            <ReferenceField source="tax_type_id" reference="tax_types"><TextField source="name" /></ReferenceField>
            <NumberField source="base" />
            <NumberField source="tax" />
            <NumberField source="total" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default Document_taxesList;
