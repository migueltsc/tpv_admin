
import React from 'react';
import { Show, SimpleShowLayout, TextField, NumberField, ReferenceField, BooleanField, ImageField } from 'react-admin';

const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="price" />
            <ReferenceField source="family_id" reference="families">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="tax_type_id" reference="tax_types">
                <TextField source="name" />
            </ReferenceField>
             <ImageField source="image_url" />
            <BooleanField source="sold_by_weight" />
            <NumberField source="retail_price" />
            <NumberField source="tax_amount" />
            <NumberField source="cost" />
            <BooleanField source="is_composite" />
            <BooleanField source="is_variation" />
        </SimpleShowLayout>
    </Show>
);

export default ProductShow;
