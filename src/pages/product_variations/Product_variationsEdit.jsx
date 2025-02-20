
import React from 'react';
import { Edit, SimpleForm, NumberInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const Product_variationsEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="name" />
<TextInput source="description" />
<NumberInput source="price" />
        </SimpleForm>
    </Edit>
);

export default Product_variationsEdit;
  