export * from './errors';
export * from './task';

const devMode = process.env.NODE_ENV === 'development';
export const server = devMode
  ? process.env.SERVER_URL_LOCAL
  : process.env.SERVER_URL;
