
import React from 'react';
import { Show, SimpleShowLayout, NumberField, TextField } from 'react-admin';

const Payment_methodsShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<TextField source="name" />
        </SimpleShowLayout>
    </Show>
);

export default Payment_methodsShow;
  