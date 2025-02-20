
import React from 'react';
import { Create, SimpleForm, NumberInput, TextInput, ReferenceInput, SelectInput, BooleanInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProductsCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/products'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
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
        </Create>
    );
};

export default ProductsCreate;
  