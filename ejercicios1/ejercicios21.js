const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

const mayoresEdad = [];
const menoresEdad = [];

for (const user of users) {
    if (user.years >= 18) {
        mayoresEdad.push(user.name);
    } else {
        menoresEdad.push(user.name);
    }
}

console.log("Usuarios mayores de edad:");
console.log(mayoresEdad);

console.log("Usuarios menores de edad:");
console.log(menoresEdad);