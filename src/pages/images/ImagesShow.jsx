
import React from 'react';
import { Show, SimpleShowLayout, NumberField, TextField } from 'react-admin';

const ImagesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<TextField source="filename" />
<TextField source="url" />
<TextField source="real_url" />
        </SimpleShowLayout>
    </Show>
);

export default ImagesShow;
  