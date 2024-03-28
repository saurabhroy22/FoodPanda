import { sum } from "../sum";

test("Sum of two number",()=>{
    const result=sum(5,5);

 //assertion
  expect(result).toBe(10);

})