
import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput, ReferenceInput, SelectInput } from 'react-admin';

const Document_headersEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="date" />
<TextInput source="number" />
<NumberInput source="discount_percentage" />
<NumberInput source="discount_amount" />
<NumberInput source="total_tax" />
<ReferenceInput source="entity_id" reference="entities"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="entity_address" />
<TextInput source="entity_zip_code" />
<TextInput source="entity_city" />
<TextInput source="entity_province" />
<TextInput source="entity_region" />
<TextInput source="entity_country" />
<TextInput source="entity_tax_id" />
<ReferenceInput source="document_type_id" reference="document_types"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="observations" />
<ReferenceInput source="user_id" reference="users"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="document_status_id" reference="document_statuses"><SelectInput optionText="name" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

export default Document_headersEdit;
  