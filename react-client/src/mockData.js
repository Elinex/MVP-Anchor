const faker = require('faker');

const generateUser = (id) => ({
  id,
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  avatar: faker.internet.avatar(),
  email: faker.internet.email(),
  city: faker.address.city(),
  zipcode: faker.address.zipCode(),
  state: faker.address.state(),
  level: faker.random.arrayElement(['beginner','intermediate','advanced']),
  preferCategory: faker.random.arrayElement(['bouldering','free solo','sport climbing','roped climbing', 'traditional climbing']),
  preferClimb: faker.random.arrayElement(['indoor','outdoor','anywhere']),
  climbSince: faker.date.past(),
  status: faker.random.arrayElement(['liked','none'])
})

const num = 50;

const users = (() => {
  const data = [];
  for (var i = 1; i <= num; i++){
    data.push(generateUser(i))
  }
  return data;
})()

export default users;