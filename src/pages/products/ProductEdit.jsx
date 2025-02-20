
import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput, BooleanInput,ImageInput ,ImageField} from 'react-admin';

const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="price" />
            <ReferenceInput source="family_id" reference="families">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <ReferenceInput source="tax_type_id" reference="tax_types">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
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

export default ProductEdit;
