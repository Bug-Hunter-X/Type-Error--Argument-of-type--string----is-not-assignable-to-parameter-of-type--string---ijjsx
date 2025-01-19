function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(', ');
}

let user = ["Jane Doe", "John Smith"];
console.log(greeterArray(user)); // This will work correctly
console.log(greeter(user[0])); // This will also work correctly by passing single element