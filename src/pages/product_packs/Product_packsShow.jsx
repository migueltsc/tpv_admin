
import React from 'react';
import { Show, SimpleShowLayout, NumberField, ReferenceField, TextField } from 'react-admin';

const Product_packsShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
<ReferenceField source="component_product_id" reference="products"><TextField source="name" /></ReferenceField>
<NumberField source="quantity" />
        </SimpleShowLayout>
    </Show>
);

export default Product_packsShow;
  