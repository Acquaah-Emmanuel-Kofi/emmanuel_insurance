export function searchArray<T>(
  array: T[],
  searchTerm: string,
  keys: (keyof T)[]
): T[] {
  return array?.filter((item) =>
    keys?.some((key) =>
      item[key]
        ?.toString()
        ?.toLowerCase()
        ?.trim()
        ?.includes(searchTerm?.toLowerCase()?.trim())
    )
  );
}
