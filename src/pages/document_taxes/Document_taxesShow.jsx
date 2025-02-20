
import React from 'react';
import { Show, SimpleShowLayout, NumberField, ReferenceField, TextField } from 'react-admin';

const Document_taxesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<ReferenceField source="document_id" reference="document_headers"><TextField source="name" /></ReferenceField>
<ReferenceField source="tax_type_id" reference="tax_types"><TextField source="name" /></ReferenceField>
<NumberField source="base" />
<NumberField source="tax" />
<NumberField source="total" />
        </SimpleShowLayout>
    </Show>
);

export default Document_taxesShow;
  