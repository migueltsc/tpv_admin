
import React from 'react';
import { Edit, SimpleForm, NumberInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const Payment_headersEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="document_header_id" reference="document_headers"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="payment_date" />
<NumberInput source="amount" />
<TextInput source="observations" />
        </SimpleForm>
    </Edit>
);

export default Payment_headersEdit;
  