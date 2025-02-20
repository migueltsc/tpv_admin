
import React from 'react';
import { Edit, SimpleForm, NumberInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const ReservationsEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="document_line_id" reference="document_lines"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="date" />
<NumberInput source="quantity" />
        </SimpleForm>
    </Edit>
);

export default ReservationsEdit;
  