import { getFirestore } from 'firebase-admin/firestore';
import { app } from './app.mjs';

export const db = getFirestore(app);
