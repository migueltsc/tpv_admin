import * as React from 'react';
import BookIcon from '@mui/icons-material/Book';
import { Box, Chip, useMediaQuery } from '@mui/material';
//import { Theme, styled } from '@mui/material/styles';
import lodashGet from 'lodash/get';
import jsonExport from 'jsonexport/dist';
import {
    BooleanField,
    BulkDeleteButton,
    BulkExportButton,
    ChipField,
    SelectColumnsButton,
    CreateButton,
    DatagridConfigurable,
    DateField,
    downloadCSV,
    EditButton,
    ExportButton,
    FilterButton,
    List,
    InfiniteList,
    NumberField,
    ReferenceArrayField,
    ReferenceManyCount,
    SearchInput,
    ShowButton,
    SimpleList,
    SingleFieldList,
    TextField,
    TextInput,
    TopToolbar,
    useRecordContext,
    useTranslate,
    ReferenceInput,
    SelectInput,
} from 'react-admin'; // eslint-disable-line import/no-unresolved



// const QuickFilter = ({
//     label,
// }: {
//     label: string;
//     source?: string;
//     defaultValue?: any;
// }) => {
//     const translate = useTranslate();
//     return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
// };


const ProductFilter = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="family_id" reference="families" alwaysOn>
        <SelectInput optionText="name" />
    </ReferenceInput>,
    <ReferenceInput source="tax_type_id" reference="tax_types" alwaysOn>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];
const postListActions = (
    <TopToolbar>
        <SelectColumnsButton />
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

const PostListActionToolbar = ({ children }) => (
    <Box sx={{ alignItems: 'center', display: 'flex' }}>{children}</Box>
);
const exporter = posts => {
    const data = posts.map(post => ({
        ...post,
        backlinks: lodashGet(post, 'backlinks', []).map(
            backlink => backlink.url
        ),
    }));
    return jsonExport(data, (err, csv) => downloadCSV(csv, 'posts'));
};

const ProductList = () => (
    <List
        filters={ProductFilter}
        exporter={exporter}
        actions={postListActions}
    >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="price" />
            <ReferenceField source="family_id" reference="families">
                <TextField source="name" />
            </ReferenceField>
            <BooleanField source="sold_by_weight" />
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default ProductList;
