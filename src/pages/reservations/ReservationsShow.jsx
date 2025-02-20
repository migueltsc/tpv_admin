
import React from 'react';
import { Show, SimpleShowLayout, NumberField, ReferenceField, TextField } from 'react-admin';

const ReservationsShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<ReferenceField source="document_line_id" reference="document_lines"><TextField source="name" /></ReferenceField>
<ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
<TextField source="date" />
<NumberField source="quantity" />
        </SimpleShowLayout>
    </Show>
);

export default ReservationsShow;
  