import dotenv from 'dotenv';

// Parse env
dotenv.config();

export const config = {
  firebaseSvcAccount: {
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
  },
  unstorage: {
    basePath: process.env.UNSTORAGE_BASE,
  },
};
