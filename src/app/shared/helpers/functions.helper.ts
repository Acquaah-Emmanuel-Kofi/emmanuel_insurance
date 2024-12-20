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


export const getFirstTwoInitials = (name: string) => {
  return name
    ?.split(' ')
    ?.map((name) => name.charAt(0)?.toUpperCase())
    ?.join('');
};