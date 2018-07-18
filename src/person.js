const isAdult = (age) => age >= 19;
const canDrink = (age) => age >= 21;
const isSeniorCitizen = (age) => age > 64;

export {isAdult, canDrink, isSeniorCitizen as default};