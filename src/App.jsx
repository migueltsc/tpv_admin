// src/App.jsx
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { Layout } from "./layouts/Layout"; // Update import path for Layout
import { authProvider } from './providers/authProvider';
import dataProvider from './providers/dataProviderConfig';
import { Homepage } from './pages/homepage'; // Import Homepage
import UserList from "./pages/users/UsersList"
import UserShow from "./pages/users/UserShow";
import UserEdit from "./pages/users/UserEdit";
import UserCreate from "./pages/users/UserCreate";

const App = () => (
  <Admin
    dashboard={Homepage} // Use Homepage
    layout={Layout}       // Use Layout
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} show={UserShow} edit={UserEdit} create={UserCreate} />
    <Resource name="roles" list={ListGuesser} />
    <Resource name="images" list={ListGuesser} />
    <Resource name="entity_types" list={ListGuesser} />

  </Admin>
);

export default App;