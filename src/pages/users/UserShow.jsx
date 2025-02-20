import React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField, ReferenceField, SingleFieldList, ChipField, ArrayField, ImageField } from 'react-admin';

const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <ImageField source="image_url" />
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <ReferenceField source="role_id" reference="roles">
                <TextField source="name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);

export default UserShow;