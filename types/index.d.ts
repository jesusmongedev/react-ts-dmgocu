interface Users {
  groupId: string;
  nombre: string;
}

interface MyGroupType {
  [key: string]: Users[];
}
