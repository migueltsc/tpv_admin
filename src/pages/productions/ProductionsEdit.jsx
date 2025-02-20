
import React from 'react';
import { Edit, SimpleForm, NumberInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const ProductionsEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="production_date" />
<NumberInput source="quantity" />
<TextInput source="production_hour" />
        </SimpleForm>
    </Edit>
);

export default ProductionsEdit;
  