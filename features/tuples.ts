const drink = { color: "brown", carbonated: true, sugar: 40 };
/*
Tuples is ARRAY-LIKE Structure where each element represents some property of a record 
*/
// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3350];

const carStats = {
  horsepower: 400,
  weight: 3350,
};
