
import React from 'react';
import { Show, SimpleShowLayout, NumberField, ReferenceField, TextField } from 'react-admin';

const ProductionsShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
<TextField source="production_date" />
<NumberField source="quantity" />
<TextField source="production_hour" />
        </SimpleShowLayout>
    </Show>
);

export default ProductionsShow;
  