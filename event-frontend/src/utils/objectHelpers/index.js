export const updateObjectInArray = (
  items,
  itemId,
  objectPropName,
  newObjectProps
) => {
  return [...items].map(i =>
    i[objectPropName] === itemId ? { ...i, ...newObjectProps } : i
  );
};
