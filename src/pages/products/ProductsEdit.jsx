
import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput, ReferenceInput, SelectInput, BooleanInput } from 'react-admin';

const ProductsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
<TextInput source="description" />
<NumberInput source="price" />
<ReferenceInput source="family_id" reference="families"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="tax_type_id" reference="tax_types"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="image_url" />
<BooleanInput source="sold_by_weight" />
<NumberInput source="retail_price" />
<NumberInput source="tax_amount" />
<NumberInput source="cost" />
<BooleanInput source="is_composite" />
<BooleanInput source="is_variation" />
        </SimpleForm>
    </Edit>
);

export default ProductsEdit;
  