
import React from 'react';
import {
    List,
    Datagrid,
    NumberField, TextField,
    SearchInput,
    ReferenceInput,
    SelectInput,
    Filter,
    EditButton,
    ShowButton,
    DeleteButton
} from 'react-admin';

const ImagesFilter = [
    <SearchInput source="q" alwaysOn />,

];

const ImagesList = () => (
    <List filters={ImagesFilter}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="filename" />
            <TextField source="url" />
            <TextField source="real_url" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default ImagesList;
