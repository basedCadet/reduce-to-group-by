import { mockData } from "../data/mock";

const groupBy = (array: any[], key: string) => {
  return array.reduce((acc, currentValue) => {
    if (!acc[currentValue[key]]) {
      acc[currentValue[key]] = [];
    }
    acc[currentValue[key]].push(currentValue);

    return acc;
  }, {});
};

console.log(groupBy(mockData, "state"));

