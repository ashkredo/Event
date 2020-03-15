export const updateObjectInArray = (
  items: [],
  itemId: number,
  objectPropName: string,
  newObjectProps: any
) => {
  return [...items].map(i =>
    i[objectPropName] === itemId ? { ...(i as {}), ...newObjectProps } : i
  );
};
