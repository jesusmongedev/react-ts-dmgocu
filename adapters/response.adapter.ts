export const adaptRes = (res: Users[]): MyGroupType => {
  const resultado = res.reduce((acc, current) => {
    if (!acc[current.groupId]) {
      acc[current.groupId] = [current];
    } else {
      acc[current.groupId].push(current);
    }
    return acc;
  }, {});
  return resultado;
};
