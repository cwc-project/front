export * from './errors';

const devMode = process.env.NODE_ENV === 'development';
export const server = devMode
  ? process.env.SERVER_URL_LOCAL
  : process.env.SERVER_URL;

// export const server = (() => {
//   if (process.env.NODE_ENV === 'development') {
//     console.log(process.env.NODE_ENV)
//     return process.env.SERVER_URL_LOCAL;
//   }
//   return process.env.SERVER_URL;
// })();

// console.log(server)
