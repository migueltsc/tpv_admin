
import React from 'react';
import { Create, SimpleForm, NumberInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Document_linesCreate = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const onSuccess = () => {
        navigate('/document_lines'); // Redirect to list after successful creation
    };

    return (
        <Create onSuccess={onSuccess}>
            <SimpleForm>
                <ReferenceInput source="document_header_id" reference="document_headers"><SelectInput optionText="name" /></ReferenceInput>
<ReferenceInput source="product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
<TextInput source="product_name" />
<NumberInput source="product_quantity" />
<NumberInput source="product_price" />
<NumberInput source="tax_percentage" />
<NumberInput source="tax_amount" />
<TextInput source="tax_description" />
<NumberInput source="discount_percentage" />
<NumberInput source="discount_amount" />
<TextInput source="discount_description" />
<NumberInput source="line_total" />
<NumberInput source="line_order" />
<TextInput source="line_type" />
<TextInput source="line_observations" />
            </SimpleForm>
        </Create>
    );
};

export default Document_linesCreate;
  