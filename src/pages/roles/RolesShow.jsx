
import React from 'react';
import { Show, SimpleShowLayout, NumberField, TextField } from 'react-admin';

const RolesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<TextField source="name" />
        </SimpleShowLayout>
    </Show>
);

export default RolesShow;
  