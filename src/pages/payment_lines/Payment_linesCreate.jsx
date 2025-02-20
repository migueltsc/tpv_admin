
import React from 'react';
import { Create, SimpleForm, NumberInput, ReferenceInput, SelectInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Payment_linesCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/payment_lines'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <ReferenceInput source="payment_header_id" reference="payment_headers"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="payment_method_id" reference="payment_methods"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="entity_id" reference="entities"><SelectInput optionText="name" /></ReferenceInput>
<NumberInput source="amount" />
            </SimpleForm>
        </Create>
    );
};

export default Payment_linesCreate;
  