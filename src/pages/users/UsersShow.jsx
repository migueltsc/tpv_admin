
import React from 'react';
import { Show, SimpleShowLayout, NumberField, TextField, ReferenceField, ImageField } from 'react-admin';

const UsersShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<TextField source="name" />
<TextField source="password" />
<TextField source="email" />
<ReferenceField source="role_id" reference="roles"><TextField source="name" /></ReferenceField>
<TextField source="image_url" />
        </SimpleShowLayout>
    </Show>
);

export default UsersShow;
  