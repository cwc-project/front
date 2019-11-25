const devMode = process.env.NODE_ENV === 'development';
export default devMode ? process.env.SERVER_URL_LOCAL : process.env.SERVER_URL;
