
import React from 'react';
import { Show, SimpleShowLayout, NumberField, TextField } from 'react-admin';

const Document_typesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<TextField source="name" />
<TextField source="description" />
        </SimpleShowLayout>
    </Show>
);

export default Document_typesShow;
  