import { db } from './db';
import { modelConverter } from './model-converter';

export async function collection<T extends { id: string }>(path: string) {
  const snapshot = await db.collection(path).withConverter(modelConverter<T>()).get();
  return snapshot.docs.map((doc) => doc.data());
}
