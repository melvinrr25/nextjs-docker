const env = process.env.NODE_ENV || 'development';

export const databaseCollections = {
  users: `${env}_users`,
  words: `${env}_words`,
} 
