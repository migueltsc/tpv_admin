
import React from 'react';
import { Show, SimpleShowLayout, NumberField, ReferenceField, TextField } from 'react-admin';

const Payment_headersShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<ReferenceField source="document_header_id" reference="document_headers"><TextField source="name" /></ReferenceField>
<TextField source="payment_date" />
<NumberField source="amount" />
<TextField source="observations" />
        </SimpleShowLayout>
    </Show>
);

export default Payment_headersShow;
  