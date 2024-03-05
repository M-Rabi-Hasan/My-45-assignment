// question no: 21

// Object representing countries
const countries: { [key: string]: { capital: string, population: number, language: string } } = {
    "USA": { capital: "Washington, D.C.", population: 331002651, language: "English" },
    "France": { capital: "Paris", population: 65273511, language: "French" },
    "China": { capital: "Beijing", population: 1439323776, language: "Mandarin" },
    "Brazil": { capital: "Brasília", population: 212559417, language: "Portuguese" },
    "India": { capital: "New Delhi", population: 1380004385, language: "Hindi" }
};

// Print information about each country
for (const country in countries) {
    console.log(`${country}: Capital - ${countries[country].capital}, Population - ${countries[country].population}, Language - ${countries[country].language}`);
}
    