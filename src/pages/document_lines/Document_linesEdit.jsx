
import React from 'react';
import { Edit, SimpleForm, NumberInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const Document_linesEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="document_header_id" reference="document_headers"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="product_name" />
<NumberInput source="product_quantity" />
<NumberInput source="product_price" />
<NumberInput source="tax_percentage" />
<NumberInput source="tax_amount" />
<TextInput source="tax_description" />
<NumberInput source="discount_percentage" />
<NumberInput source="discount_amount" />
<TextInput source="discount_description" />
<NumberInput source="line_total" />
<NumberInput source="line_order" />
<TextInput source="line_type" />
<TextInput source="line_observations" />
        </SimpleForm>
    </Edit>
);

export default Document_linesEdit;
  