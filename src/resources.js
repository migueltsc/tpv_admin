// src/resources.js
import React from "react";
import { Resource } from "react-admin";

// Importa los index de cada recurso (tabla)
import * as users from "./pages/users";
import * as roles from "./pages/roles";
import * as images from "./pages/images";
import * as entity_types from "./pages/entity_types";
import * as products from "./pages/products";
import * as families from "./pages/families";
import * as tax_types from "./pages/tax_types";
import * as product_variations from "./pages/product_variations";
import * as payment_lines from "./pages/payment_lines";
import * as payment_headers from "./pages/payment_headers";
import * as payment_methods from "./pages/payment_methods";
import * as productions from "./pages/productions";
import * as stock from "./pages/stock";
import * as document_statuses from "./pages/document_statuses";
import * as reservations from "./pages/reservations";
import * as entities from "./pages/entities";
import * as document_types from "./pages/document_types";
import * as document_taxes from "./pages/document_taxes";
import * as product_packs from "./pages/product_packs";
import * as document_headers from "./pages/document_headers";
import * as document_lines from "./pages/document_lines";

const Resources = () => (
  <React.Fragment>
    <Resource
      name="users"
      list={users.UserList}
      show={users.UserShow}
      edit={users.UserEdit}
      create={users.UserCreate}
    />
    <Resource
      name="roles"
      list={roles.RoleList}
      show={roles.RoleShow}
      edit={roles.RoleEdit}
      create={roles.RoleCreate}
    />
    <Resource
      name="images"
      list={images.ImageList}
      show={images.ImageShow}
      edit={images.ImageEdit}
      create={images.ImageCreate}
    />
    <Resource
      name="entity_types"
      list={entity_types.Entity_typesList}
      show={entity_types.Entity_typesShow}
      edit={entity_types.Entity_typesEdit}
      create={entity_types.Entity_typesCreate}
    />
    <Resource
      name="products"
      list={products.ProductList}
      show={products.ProductShow}
      edit={products.ProductEdit}
      create={products.ProductCreate}
    />
    <Resource
      name="families"
      list={families.FamilyList}
      show={families.FamilyShow}
      edit={families.FamilyEdit}
      create={families.FamilyCreate}
    />
    <Resource
      name="tax_types"
      list={tax_types.Tax_typeList}
      show={tax_types.Tax_typeShow}
      edit={tax_types.Tax_typeEdit}
      create={tax_types.Tax_typeCreate}
    />
    <Resource
      name="product_variations"
      list={product_variations.Product_variationList}
      show={product_variations.Product_variationShow}
      edit={product_variations.Product_variationEdit}
      create={product_variations.Product_variationCreate}
    />
    <Resource
      name="payment_lines"
      list={payment_lines.Payment_lineList}
      show={payment_lines.Payment_lineShow}
      edit={payment_lines.Payment_lineEdit}
      create={payment_lines.Payment_lineCreate}
    />
    <Resource
      name="payment_headers"
      list={payment_headers.Payment_headerList}
      show={payment_headers.Payment_headerShow}
      edit={payment_headers.Payment_headerEdit}
      create={payment_headers.Payment_headerCreate}
    />
    <Resource
      name="payment_methods"
      list={payment_methods.Payment_methodList}
      show={payment_methods.Payment_methodShow}
      edit={payment_methods.Payment_methodEdit}
      create={payment_methods.Payment_methodCreate}
    />
    <Resource
      name="productions"
      list={productions.ProductionList}
      show={productions.ProductionShow}
      edit={productions.ProductionEdit}
      create={productions.ProductionCreate}
    />
    <Resource
      name="stock"
      list={stock.StockList}
      show={stock.StockShow}
      edit={stock.StockEdit}
      create={stock.StockCreate}
    />
    <Resource
      name="document_statuses"
      list={document_statuses.Document_statusList}
      show={document_statuses.Document_statusShow}
      edit={document_statuses.Document_statusEdit}
      create={document_statuses.Document_statusCreate}
    />
    <Resource
      name="reservations"
      list={reservations.ReservationList}
      show={reservations.ReservationShow}
      edit={reservations.ReservationEdit}
      create={reservations.ReservationCreate}
    />
    <Resource
      name="entities"
      list={entities.EntityList}
      show={entities.EntityShow}
      edit={entities.EntityEdit}
      create={entities.EntityCreate}
    />
    <Resource
      name="document_types"
      list={document_types.Document_typeList}
      show={document_types.Document_typeShow}
      edit={document_types.Document_typeEdit}
      create={document_types.Document_typeCreate}
    />
    <Resource
      name="document_taxes"
      list={document_taxes.Document_taxList}
      show={document_taxes.Document_taxShow}
      edit={document_taxes.Document_taxEdit}
      create={document_taxes.Document_taxCreate}
    />
    <Resource
      name="product_packs"
      list={product_packs.Product_packList}
      show={product_packs.Product_packShow}
      edit={product_packs.Product_packEdit}
      create={product_packs.Product_packCreate}
    />
    <Resource
      name="document_headers"
      list={document_headers.Document_headerList}
      show={document_headers.Document_headerShow}
      edit={document_headers.Document_headerEdit}
      create={document_headers.Document_headerCreate}
    />
    <Resource
      name="document_lines"
      list={document_lines.Document_lineList}
      show={document_lines.Document_lineShow}
      edit={document_lines.Document_lineEdit}
      create={document_lines.Document_lineCreate}
    />
  </React.Fragment>
);

export default Resources;
