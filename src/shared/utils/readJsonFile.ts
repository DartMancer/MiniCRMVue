export const readJsonFile = async <T = unknown>(file: File): Promise<T> => {
  const text = await file.text();
  return JSON.parse(text) as T;
};
