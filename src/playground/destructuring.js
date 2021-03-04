const person = {
  name: 'Hayeon',
  age: 30,
  location: {
    city: 'Tokyo',
    temp: -1
  }
};

const { name: firstName = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

console.log('-------------------------------------------');

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);
