import { db } from './db.mjs';
import { modelConverter } from './model-converter.mjs';

export async function collection<T extends { id: string }>(path: string) {
  const snapshot = await db.collection(path).withConverter(modelConverter<T>()).get();
  return snapshot.docs.map((doc) => doc.data());
}
