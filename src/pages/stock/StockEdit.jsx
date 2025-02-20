
import React from 'react';
import { Edit, SimpleForm, NumberInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const StockEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="date" />
<NumberInput source="quantity" />
        </SimpleForm>
    </Edit>
);

export default StockEdit;
  