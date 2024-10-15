const { PORT, API, ENV, HOST, BASE_URL } = process.env;

export const coreConfig = {
  port: parseInt(PORT) || 3001,
  api: API || 'REST',
  env: ENV || 'DEVELOPMENT',
  host: HOST || 'localhost',
  baseUrl: BASE_URL || `http://localhost:${PORT}`,
};
