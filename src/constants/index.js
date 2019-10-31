export * from './errors';

export const server = process.env.SERVER_URL;
// export const server = (() => {
//   if (process.env.NODE_ENV === 'development') {
//     console.log(process.env.NODE_ENV)
//     return process.env.SERVER_URL_LOCAL;
//   }
//   return process.env.SERVER_URL;
// })();

// console.log(server)
