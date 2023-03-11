import { storage } from './storage';

export async function cachedFunction<T>(key: string, fn: () => Promise<T>) {
  const storageKey = `${key}.json`;
  const cachedValue = await storage.getItem(storageKey);
  if (cachedValue !== null) {
    console.log('Cache hit');
    return cachedValue as T;
  } else {
    console.log('Caching');
    const value = await fn();
    await storage.setItem(storageKey, JSON.stringify(value));
    return value;
  }
}
