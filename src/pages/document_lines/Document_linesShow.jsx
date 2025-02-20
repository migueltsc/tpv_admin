
import React from 'react';
import { Show, SimpleShowLayout, NumberField, ReferenceField, TextField } from 'react-admin';

const Document_linesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<ReferenceField source="document_header_id" reference="document_headers"><TextField source="name" /></ReferenceField>
<ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
<TextField source="product_name" />
<NumberField source="product_quantity" />
<NumberField source="product_price" />
<NumberField source="tax_percentage" />
<NumberField source="tax_amount" />
<TextField source="tax_description" />
<NumberField source="discount_percentage" />
<NumberField source="discount_amount" />
<TextField source="discount_description" />
<NumberField source="line_total" />
<TextField source="line_order" />
<TextField source="line_type" />
<TextField source="line_observations" />
        </SimpleShowLayout>
    </Show>
);

export default Document_linesShow;
  