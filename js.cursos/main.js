const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1982, end: 2004},
    {name: "Company Three", category: "Auto", start: 1983, end: 2005},
    {name: "Company Four", category: "Retail", start: 1984, end: 2006},
    {name: "Company Five", category: "Technology", start: 1985, end: 2007},
    {name: "Company Six", category: "Auto", start: 1986, end: 2008},
    {name: "Company Seven", category: "Technology", start: 1987, end: 2009},
    {name: "Company Eight", category: "Retail", start: 1988, end: 2010}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45];

// for básico
for(let i = 0; i < companies.length; i++){
    console.log(companies[1]);
}

// forEach
companies.forEach(function(company) {
    console.log(company.name);
});

// filter

// GET 21 AND OLDER
// FORMA CON FOR Y CONDICIÓN DENTRO DE ESTE
//let canDrink = [];
//for (let i = 0; i < ages.lages; i++) {
//    if (ages[i] >= 21) {
//        canDrink.push(ages[i]);
//    }
//}

// FORMA USANDO FILTER, UNA FUNCIÓN Y DENTRO LA CONDICIÓN DE ESTE
// const canDrink = ages.filter(function(age){
//     if (age => 21) {
//         return true;
//     }
// });

// FORMA USANDO FILTER Y METIENDO LA FUNCIÓN EN UN PARÁMETRO
const canDrink = ages.filter(age => age >= 21);

// FILTER Retail companies
// FORMA USANDO FILTER, UNA FUNCIÓN Y DENTRO LA CONDICIÓN DE ESTE
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail') {
//         return true;
//     }
// });

const retailCompanies = companies.filter(company => company.category === 'Retail');

// GET 80s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// GET companies that lasted 10 years or more
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10))

console.log(canDrink);
console.log(retailCompanies);
console.log(eightiesCompanies);
console.log(lastedTenYears);

// map

// CREATE ARRAY of company names
// const companyNames = companies.map(function(company){
//     return company.name;
// });

// FORMA USANDO UNA FUNCTION Y DEVOLVIENDO EL RESULTADO
// Para concatenar usamos `` y para añadir un parametro ${parametro}
// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// FORMA METIENDO LA FUNCIÓN EN UN PARÁMETRO
// const testMap = companies.map(
//     company => `${company.name} [${company.start} - ${company.end}]`
// );

// FUNCIÓN que hace la RAÍZ CUADRADA de los años
//const agesSquare = ages.map(age => Math.sqrt(age))

// FUNCIÓN que hace una multiplicación de cada año
//const agesTimeTwo = ages.map(age => age * 2);

// TAMBIÉN PODEMOS JUNTAR LAS DOS FUNCIONES EN UNA CONSTANTE
// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);

// console.log(testMap);
//console.log(agesSquare);
//console.log(agesTimeTwo);
// console.log(ageMap)

// sort
// Vamos a comparar companies para saber quien empezó antes y ordenar de menor a mayor
// FORMA USANDO FUNCTION Y DENTRO LA CONDICIÓN
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if (c1.start > c2.start){
//         return 1;
//     } else {
//         return -1;
//     }
// });

// FORMA METIENDO LA FUNCIÓN EN UN PARÁMETRO, COMO ESTA DEVUELVE 1 O -1 NECESITAMOS USAR UN TERNARIO ?
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
// Si pones solo el .sort() ordena los ages por el primer caracter
// Que es a y que es b -> Va cogiendo parametros, es decir a es = primerParametro y b es = segundoParametro y va pasando
// a es = segundoParametro y b es = tercerParametro

// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);
console.log(sortedCompanies);

// reduce
// FORMA USANDO UN FOR
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// FORMA USANDO FUNCTION Y DENTRO LO QUE DEVUELVE ESTA
// el 0 es el valor inicial 
// const ageSuma = ages.reduce(function(total, age){
//     return total + age;
// }, 0);

// FORMA METIENDO LA FUNCIÓN EN UN PARÁMETRO
// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies
// FORMA USANDO FUNCTION Y DENTRO LO QUE DEVUELVE ESTA 
// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// }, 0)

// FORMA METIENDO LA FUNCIÓN EN UN PARÁMETRO
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(ageSum);
console.log(totalYears);

// Combine Methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a + b)
    .reduce((a, b) => a + b, 0);

console.log(combined);

// QUE HACE CADA FUNCIÓN:
// - filter: Para filtrar por algo "como en SQL x WHERE x > 10 y si hacias un select de eso te sacaba solo las x > 10"
// - map: Para mapear un par de identidades de tu programa
// - sort: Para ordenar los elementos de un array, devuelve el array ordenado
// - reduce: Para devolver un único valor

// Push de prueba