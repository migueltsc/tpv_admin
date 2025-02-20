import Tax_typesList from "./pages/tax_types/Tax_typesList";
import Tax_typesShow from "./pages/tax_types/Tax_typesShow";
import Tax_typesEdit from "./pages/tax_types/Tax_typesEdit";
import Tax_typesCreate from "./pages/tax_types/Tax_typesCreate";
import Document_linesList from "./pages/document_lines/Document_linesList";
import Document_linesShow from "./pages/document_lines/Document_linesShow";
import Document_linesEdit from "./pages/document_lines/Document_linesEdit";
import Document_linesCreate from "./pages/document_lines/Document_linesCreate";
import RolesList from "./pages/roles/RolesList";
import RolesShow from "./pages/roles/RolesShow";
import RolesEdit from "./pages/roles/RolesEdit";
import RolesCreate from "./pages/roles/RolesCreate";
import Document_headersList from "./pages/document_headers/Document_headersList";
import Document_headersShow from "./pages/document_headers/Document_headersShow";
import Document_headersEdit from "./pages/document_headers/Document_headersEdit";
import Document_headersCreate from "./pages/document_headers/Document_headersCreate";
import UsersList from "./pages/users/UsersList";
import UsersShow from "./pages/users/UsersShow";
import UsersEdit from "./pages/users/UsersEdit";
import UsersCreate from "./pages/users/UsersCreate";
import Product_packsList from "./pages/product_packs/Product_packsList";
import Product_packsShow from "./pages/product_packs/Product_packsShow";
import Product_packsEdit from "./pages/product_packs/Product_packsEdit";
import Product_packsCreate from "./pages/product_packs/Product_packsCreate";
import Entity_typesList from "./pages/entity_types/Entity_typesList";
import Entity_typesShow from "./pages/entity_types/Entity_typesShow";
import Entity_typesEdit from "./pages/entity_types/Entity_typesEdit";
import Entity_typesCreate from "./pages/entity_types/Entity_typesCreate";
import Document_taxesList from "./pages/document_taxes/Document_taxesList";
import Document_taxesShow from "./pages/document_taxes/Document_taxesShow";
import Document_taxesEdit from "./pages/document_taxes/Document_taxesEdit";
import Document_taxesCreate from "./pages/document_taxes/Document_taxesCreate";
import Document_typesList from "./pages/document_types/Document_typesList";
import Document_typesShow from "./pages/document_types/Document_typesShow";
import Document_typesEdit from "./pages/document_types/Document_typesEdit";
import Document_typesCreate from "./pages/document_types/Document_typesCreate";
import EntitiesList from "./pages/entities/EntitiesList";
import EntitiesShow from "./pages/entities/EntitiesShow";
import EntitiesEdit from "./pages/entities/EntitiesEdit";
import EntitiesCreate from "./pages/entities/EntitiesCreate";
import ReservationsList from "./pages/reservations/ReservationsList";
import ReservationsShow from "./pages/reservations/ReservationsShow";
import ReservationsEdit from "./pages/reservations/ReservationsEdit";
import ReservationsCreate from "./pages/reservations/ReservationsCreate";
import ProductsList from "./pages/products/ProductsList";
import ProductsShow from "./pages/products/ProductsShow";
import ProductsEdit from "./pages/products/ProductsEdit";
import ProductsCreate from "./pages/products/ProductsCreate";
import Document_statusesList from "./pages/document_statuses/Document_statusesList";
import Document_statusesShow from "./pages/document_statuses/Document_statusesShow";
import Document_statusesEdit from "./pages/document_statuses/Document_statusesEdit";
import Document_statusesCreate from "./pages/document_statuses/Document_statusesCreate";
import StockList from "./pages/stock/StockList";
import StockShow from "./pages/stock/StockShow";
import StockEdit from "./pages/stock/StockEdit";
import StockCreate from "./pages/stock/StockCreate";
import ProductionsList from "./pages/productions/ProductionsList";
import ProductionsShow from "./pages/productions/ProductionsShow";
import ProductionsEdit from "./pages/productions/ProductionsEdit";
import ProductionsCreate from "./pages/productions/ProductionsCreate";
import Payment_methodsList from "./pages/payment_methods/Payment_methodsList";
import Payment_methodsShow from "./pages/payment_methods/Payment_methodsShow";
import Payment_methodsEdit from "./pages/payment_methods/Payment_methodsEdit";
import Payment_methodsCreate from "./pages/payment_methods/Payment_methodsCreate";
import Payment_headersList from "./pages/payment_headers/Payment_headersList";
import Payment_headersShow from "./pages/payment_headers/Payment_headersShow";
import Payment_headersEdit from "./pages/payment_headers/Payment_headersEdit";
import Payment_headersCreate from "./pages/payment_headers/Payment_headersCreate";
import Payment_linesList from "./pages/payment_lines/Payment_linesList";
import Payment_linesShow from "./pages/payment_lines/Payment_linesShow";
import Payment_linesEdit from "./pages/payment_lines/Payment_linesEdit";
import Payment_linesCreate from "./pages/payment_lines/Payment_linesCreate";
import Product_variationsList from "./pages/product_variations/Product_variationsList";
import Product_variationsShow from "./pages/product_variations/Product_variationsShow";
import Product_variationsEdit from "./pages/product_variations/Product_variationsEdit";
import Product_variationsCreate from "./pages/product_variations/Product_variationsCreate";
import ImagesList from "./pages/images/ImagesList";
import ImagesShow from "./pages/images/ImagesShow";
import ImagesEdit from "./pages/images/ImagesEdit";
import ImagesCreate from "./pages/images/ImagesCreate";
import FamiliesList from "./pages/families/FamiliesList";
import FamiliesShow from "./pages/families/FamiliesShow";
import FamiliesEdit from "./pages/families/FamiliesEdit";
import FamiliesCreate from "./pages/families/FamiliesCreate";

import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { Layout } from "./layouts/Layout";
import { authProvider } from './providers/authProvider';
import dataProvider from './providers/dataProviderConfig';
import { Homepage } from './pages/homepage';


import UserList from "./pages/users/UsersList";
import UserShow from "./pages/users/UserShow";
import UserEdit from "./pages/users/UserEdit";
import UserCreate from "./pages/users/UserCreate";

// Importa los componentes de products
import ProductList from "./pages/products/ProductList";
import ProductShow from "./pages/products/ProductShow";
import ProductEdit from "./pages/products/ProductEdit";
import ProductCreate from "./pages/products/ProductCreate";

const App = () => (
    <Admin
        dashboard={Homepage}
        layout={Layout}
        authProvider={authProvider}
        dataProvider={dataProvider}
    >
        <Resource name="families" list={FamiliesList} show={FamiliesShow} edit={FamiliesEdit} create={FamiliesCreate} />
        <Resource name="images" list={ImagesList} show={ImagesShow} edit={ImagesEdit} create={ImagesCreate} />
        <Resource name="product_variations" list={Product_variationsList} show={Product_variationsShow} edit={Product_variationsEdit} create={Product_variationsCreate} />
        <Resource name="payment_lines" list={Payment_linesList} show={Payment_linesShow} edit={Payment_linesEdit} create={Payment_linesCreate} />
        <Resource name="payment_headers" list={Payment_headersList} show={Payment_headersShow} edit={Payment_headersEdit} create={Payment_headersCreate} />
        <Resource name="payment_methods" list={Payment_methodsList} show={Payment_methodsShow} edit={Payment_methodsEdit} create={Payment_methodsCreate} />
        <Resource name="productions" list={ProductionsList} show={ProductionsShow} edit={ProductionsEdit} create={ProductionsCreate} />
        <Resource name="stock" list={StockList} show={StockShow} edit={StockEdit} create={StockCreate} />
        <Resource name="document_statuses" list={Document_statusesList} show={Document_statusesShow} edit={Document_statusesEdit} create={Document_statusesCreate} />
        <Resource name="products" list={ProductsList} show={ProductsShow} edit={ProductsEdit} create={ProductsCreate} />
        <Resource name="reservations" list={ReservationsList} show={ReservationsShow} edit={ReservationsEdit} create={ReservationsCreate} />
        <Resource name="entities" list={EntitiesList} show={EntitiesShow} edit={EntitiesEdit} create={EntitiesCreate} />
        <Resource name="document_types" list={Document_typesList} show={Document_typesShow} edit={Document_typesEdit} create={Document_typesCreate} />
        <Resource name="document_taxes" list={Document_taxesList} show={Document_taxesShow} edit={Document_taxesEdit} create={Document_taxesCreate} />
        <Resource name="entity_types" list={Entity_typesList} show={Entity_typesShow} edit={Entity_typesEdit} create={Entity_typesCreate} />
        <Resource name="product_packs" list={Product_packsList} show={Product_packsShow} edit={Product_packsEdit} create={Product_packsCreate} />
        <Resource name="users" list={UsersList} show={UsersShow} edit={UsersEdit} create={UsersCreate} />
        <Resource name="document_headers" list={Document_headersList} show={Document_headersShow} edit={Document_headersEdit} create={Document_headersCreate} />
        <Resource name="roles" list={RolesList} show={RolesShow} edit={RolesEdit} create={RolesCreate} />
        <Resource name="document_lines" list={Document_linesList} show={Document_linesShow} edit={Document_linesEdit} create={Document_linesCreate} />
        <Resource name="tax_types" list={Tax_typesList} show={Tax_typesShow} edit={Tax_typesEdit} create={Tax_typesCreate} />
        <Resource name="products" list={ProductsList} show={ProductsShow} edit={ProductsEdit} create={ProductsCreate} />


    </Admin>
);

export default App;
