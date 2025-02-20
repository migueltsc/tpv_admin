
import React from 'react';
import { Show, SimpleShowLayout, NumberField, TextField, ImageField } from 'react-admin';

const FamiliesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<TextField source="name" />
<TextField source="image_url" />
<TextField source="color" />
        </SimpleShowLayout>
    </Show>
);

export default FamiliesShow;
  