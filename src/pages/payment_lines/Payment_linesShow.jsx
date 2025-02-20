
import React from 'react';
import { Show, SimpleShowLayout, NumberField, ReferenceField, TextField } from 'react-admin';

const Payment_linesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<ReferenceField source="payment_header_id" reference="payment_headers"><TextField source="name" /></ReferenceField>
<ReferenceField source="payment_method_id" reference="payment_methods"><TextField source="name" /></ReferenceField>
<ReferenceField source="entity_id" reference="entities"><TextField source="name" /></ReferenceField>
<NumberField source="amount" />
        </SimpleShowLayout>
    </Show>
);

export default Payment_linesShow;
  