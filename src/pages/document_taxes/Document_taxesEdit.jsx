
import React from 'react';
import { Edit, SimpleForm, NumberInput, ReferenceInput, SelectInput } from 'react-admin';

const Document_taxesEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="document_id" reference="document_headers"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="tax_type_id" reference="tax_types"><SelectInput optionText="name" /></ReferenceInput>
<NumberInput source="base" />
<NumberInput source="tax" />
<NumberInput source="total" />
        </SimpleForm>
    </Edit>
);

export default Document_taxesEdit;
  