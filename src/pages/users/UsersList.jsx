// @ts-nocheck
import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    ReferenceField,
    SingleFieldList,
    ChipField,
    ArrayField,
    TopToolbar,
    ShowButton,
    EditButton,
    ImageField
} from 'react-admin';
import ImageWithUploadAndPreview from '../../components/ImageWithUploadAndPreview';

const UserListActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ShowButton basePath={basePath} data={data} resource={resource} />
        <EditButton basePath={basePath} data={data} resource={resource} />
    </TopToolbar>
);
const UserList = () => (
    <List>
        <Datagrid rowClick={false}>
            <ImageWithUploadAndPreview source="image_url" entity="users" />
            <ImageField source="image_url" />
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <ReferenceField source="role_id" reference="roles">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export default UserList;