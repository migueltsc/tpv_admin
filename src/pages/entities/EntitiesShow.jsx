
import React from 'react';
import { Show, SimpleShowLayout, NumberField, TextField, ReferenceField } from 'react-admin';

const EntitiesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
<TextField source="name" />
<TextField source="alias" />
<ReferenceField source="entity_type_id" reference="entity_types"><TextField source="name" /></ReferenceField>
<TextField source="address" />
<TextField source="zip_code" />
<TextField source="city" />
<TextField source="province" />
<TextField source="country" />
<TextField source="phone" />
<TextField source="email" />
<TextField source="tax_id" />
        </SimpleShowLayout>
    </Show>
);

export default EntitiesShow;
  