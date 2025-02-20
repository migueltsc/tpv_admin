
import React from 'react';
import { Create, SimpleForm, NumberInput, ReferenceInput, SelectInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Product_packsCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/product_packs'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <ReferenceInput source="product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="component_product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
<NumberInput source="quantity" />
            </SimpleForm>
        </Create>
    );
};

export default Product_packsCreate;
  