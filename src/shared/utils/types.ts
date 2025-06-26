// Берём только string-поля
export type PickKeysWithType<T, V> = {
  [K in keyof T]: NonNullable<T[K]> extends V ? K : never;
}[keyof T];

// Убираем ненужные ключи
export type RemoveKeys<T, K extends keyof any> = Exclude<T, K>;
