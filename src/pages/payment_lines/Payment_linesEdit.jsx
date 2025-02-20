
import React from 'react';
import { Edit, SimpleForm, NumberInput, ReferenceInput, SelectInput } from 'react-admin';

const Payment_linesEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="payment_header_id" reference="payment_headers"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="payment_method_id" reference="payment_methods"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="entity_id" reference="entities"><SelectInput optionText="name" /></ReferenceInput>
<NumberInput source="amount" />
        </SimpleForm>
    </Edit>
);

export default Payment_linesEdit;
  