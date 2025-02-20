
import React from 'react';
import { Edit, SimpleForm, NumberInput, ReferenceInput, SelectInput } from 'react-admin';

const Product_packsEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="component_product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
<NumberInput source="quantity" />
        </SimpleForm>
    </Edit>
);

export default Product_packsEdit;
  