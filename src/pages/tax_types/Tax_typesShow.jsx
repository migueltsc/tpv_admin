
import React from 'react';
import { Show, SimpleShowLayout, NumberField, TextField } from 'react-admin';

const Tax_typesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<TextField source="name" />
<NumberField source="percentage" />
        </SimpleShowLayout>
    </Show>
);

export default Tax_typesShow;
  