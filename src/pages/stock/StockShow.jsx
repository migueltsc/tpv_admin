
import React from 'react';
import { Show, SimpleShowLayout, NumberField, ReferenceField, TextField } from 'react-admin';

const StockShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
<TextField source="date" />
<NumberField source="quantity" />
        </SimpleShowLayout>
    </Show>
);

export default StockShow;
  