import React from 'react';
import { DashboardMenuItem, MenuItemLink } from 'react-admin';
import BookIcon from '@mui/icons-material/Book'; // Productos
import PeopleIcon from '@mui/icons-material/People'; // Entidades, Usuarios, Familias
import CategoryIcon from '@mui/icons-material/Category'; // Categorías, Tipos
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Pagos, Impuestos
import ReceiptIcon from '@mui/icons-material/Receipt'; // Documentos, Facturas
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // Envío, Stock
import SettingsIcon from '@mui/icons-material/Settings'; // Configuraciones
import ImageIcon from '@mui/icons-material/Image'; // Imágenes
import AccountBoxIcon from '@mui/icons-material/AccountBox'; // Roles, Usuarios
import BusinessIcon from '@mui/icons-material/Business'; // Entidades
import AssignmentIcon from '@mui/icons-material/Assignment'; // Documentos
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'; // Estados
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Carrito, Packs
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'; // Producción
import TuneIcon from '@mui/icons-material/Tune'; // Variaciones

const MyMenu = () => (
    <div>
        <DashboardMenuItem />

        <MenuItemLink to="/products" primaryText="Productos" leftIcon={<BookIcon />} />
        <MenuItemLink to="/families" primaryText="Familias" leftIcon={<CategoryIcon />} />
        <MenuItemLink to="/tax_types" primaryText="Tipos de Impuestos" leftIcon={<AttachMoneyIcon />} />
        <MenuItemLink to="/product_variations" primaryText="Variaciones de Productos" leftIcon={<TuneIcon />} />
        <MenuItemLink to="/product_packs" primaryText="Packs de Productos" leftIcon={<ShoppingCartIcon />} />

        <MenuItemLink to="/entities" primaryText="Entidades" leftIcon={<BusinessIcon />} />
        <MenuItemLink to="/users" primaryText="Usuarios" leftIcon={<AccountBoxIcon />} />
        <MenuItemLink to="/roles" primaryText="Roles" leftIcon={<SettingsIcon />} />
        <MenuItemLink to="/entity_types" primaryText="Tipos de Entidades" leftIcon={<CategoryIcon />} />

        <MenuItemLink to="/document_headers" primaryText="Cabeceras de Documentos" leftIcon={<AssignmentIcon />} />
        <MenuItemLink to="/document_lines" primaryText="Líneas de Documentos" leftIcon={<AssignmentIcon />} />
        <MenuItemLink to="/document_types" primaryText="Tipos de Documentos" leftIcon={<CategoryIcon />} />
        <MenuItemLink to="/document_statuses" primaryText="Estados de Documentos" leftIcon={<PlaylistAddCheckIcon />} />
        <MenuItemLink to="/document_taxes" primaryText="Impuestos de Documentos" leftIcon={<AttachMoneyIcon />} />
        <MenuItemLink to="/payment_headers" primaryText="Cabeceras de Pagos" leftIcon={<AttachMoneyIcon />} />
        <MenuItemLink to="/payment_lines" primaryText="Líneas de Pagos" leftIcon={<AttachMoneyIcon />} />
        <MenuItemLink to="/payment_methods" primaryText="Métodos de Pago" leftIcon={<AttachMoneyIcon />} />
        <MenuItemLink to="/reservations" primaryText="Reservas" leftIcon={<AssignmentIcon />} />

        <MenuItemLink to="/productions" primaryText="Producciones" leftIcon={<LibraryAddIcon />} />
        <MenuItemLink to="/stock" primaryText="Inventario" leftIcon={<LocalShippingIcon />} />

        <MenuItemLink to="/images" primaryText="Imágenes" leftIcon={<ImageIcon />} />
    </div>
);

export default MyMenu;