// src/dataProviderConfig.js
import { fetchUtils } from 'react-admin';
import postgrestRestProvider, { defaultPrimaryKeys, defaultSchema } from '@raphiniert/ra-data-postgrest';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  const bearerToken = 'Bearer ' + (localStorage.getItem('token') || 'notokenprovided');
  options.headers.set('Authorization', bearerToken);
  return fetchUtils.fetchJson(url, options);
};

const config = {
  apiUrl: 'http://localhost/api', // Valor por defecto
  httpClient: httpClient,
  defaultListOp: 'eq',
  primaryKeys: defaultPrimaryKeys,
  schema: defaultSchema
};

config.apiUrl = import.meta.env.VITE_API_URL;

const dataProvider = postgrestRestProvider(config);

export default dataProvider;