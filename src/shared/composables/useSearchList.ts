import { computed, type Ref } from "vue";

export function useSearchList<T>(
  list: Ref<T[]>,
  query: Ref<string>,
  fields: (keyof T)[]
) {
  return computed(() => {
    const q = query.value.trim().toLowerCase();
    if (!q) return list.value;

    return list.value.filter((item) =>
      fields.some((key) => {
        const val = item[key];
        return typeof val === "string" && val.toLowerCase().includes(q);
      })
    );
  });
}
