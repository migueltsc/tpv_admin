
import React from 'react';
import { Create, SimpleForm, NumberInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProductionsCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/productions'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <ReferenceInput source="product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="production_date" />
<NumberInput source="quantity" />
<TextInput source="production_hour" />
            </SimpleForm>
        </Create>
    );
};

export default ProductionsCreate;
  