import React from 'react';
import { Edit, ImageInput, ImageField, SimpleForm, TextInput, EmailField, ReferenceInput, SelectInput, ArrayInput, SimpleFormIterator } from 'react-admin';
import ImageWithUploadAndPreview
    from '../../components/ImageWithUploadAndPreview';
const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="image_url" />

            <ReferenceInput source="role_id" reference="roles">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <ImageWithUploadAndPreview source="image_url" />
        </SimpleForm>
    </Edit>
);

export default UserEdit;
