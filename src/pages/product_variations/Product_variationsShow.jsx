
import React from 'react';
import { Show, SimpleShowLayout, NumberField, ReferenceField, TextField } from 'react-admin';

const Product_variationsShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
<TextField source="name" />
<TextField source="description" />
<NumberField source="price" />
        </SimpleShowLayout>
    </Show>
);

export default Product_variationsShow;
  