
import React from 'react';
import { Show, SimpleShowLayout, NumberField, TextField } from 'react-admin';

const Entity_typesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<TextField source="name" />
<TextField source="description" />
        </SimpleShowLayout>
    </Show>
);

export default Entity_typesShow;
  