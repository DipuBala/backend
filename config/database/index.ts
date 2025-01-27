const { DB, MONGODB_URI } = process.env;

export const dbConfig = {
  mongodb: {
    URI: MONGODB_URI || 'mongodb://localhost:27017/shovon-dev',
  },
  db: DB || 'MONGO',
};
