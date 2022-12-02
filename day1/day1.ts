import fs from "fs";

const rawInput = fs.readFileSync("./day1data.txt", "utf-8");
const groupedInput = rawInput.split(/\n\n/);
const input = groupedInput.map((x) => x.split(/\n/).map((y) => parseInt(y)));

const part1 = (input: any) => {
  return input
    .map((x: any[]) => x.reduce((a: any, b: any) => a + b, 0))
    .sort((a: number, b: number) => b - a)[0];
};

const part2 = (input: any) => {
  const most = input
    .map((x: any[]) => x.reduce((a: any, b: any) => a + b, 0))
    .sort((a: number, b: number) => b - a)[0];

    const secondMost = input
    .map((x: any[]) => x.reduce((a: any, b: any) => a + b, 0))
    .sort((a: number, b: number) => b - a)[1];

    const thirdMost = input
    .map((x: any[]) => x.reduce((a: any, b: any) => a + b, 0))
    .sort((a: number, b: number) => b - a)[2];

    const total = most + secondMost + thirdMost;
    return total;
};

console.log(part1(input));
console.log(part2(input));
