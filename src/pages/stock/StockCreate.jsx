
import React from 'react';
import { Create, SimpleForm, NumberInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const StockCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/stock'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <ReferenceInput source="product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="date" />
<NumberInput source="quantity" />
            </SimpleForm>
        </Create>
    );
};

export default StockCreate;
  