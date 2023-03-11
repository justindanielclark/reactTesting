import sum from "./sum";

// test("", ()=>{
//   expect(sum()).toBe()
// })

test("Sum: Adds two positive numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Sum: Adds two negative numbers", () => {
  expect(sum(-1, -2)).toBe(-3);
});

test("Throws an error if either parameter is 5", () => {
  expect(() => {
    sum(5, 0);
  }).toThrow("Provided Parameters Must Not Be The Number 5");
  expect(() => {
    sum(0, 5);
  }).toThrow("Provided Parameters Must Not Be The Number 5");
});
