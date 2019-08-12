import React from 'react';

const styles = {
  mainDiv: {
    width: '192px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.15)'
  },
  img: {
    backgroundColor: '#fff',
    border: '2px solid #fff',
    boxShadow: '0 0 3px 0 rgba(0,0,0,.2)',
    width: '104px',
    height: '104px',
    boxSizing: 'border-box',
    backgroundClip: 'content-box',
    borderRadius: '50%'
  }
}

const Item = ({user}) => {
  return (
    <div style={styles.mainDiv}>
      <img src={user.avatar} style={styles.img}></img>
      <span>{user.name}</span>
      <span>{user.city}</span>
      <span>Prefered category: {user.preferCategory}</span>
      <span>Prefer climbing in: {user.preferClimb}</span>
      <span>{`Climb since ${user.climbSince}`}</span>
      <span>Level: {user.level}</span>
    </div>
  )
}

export default Item;

// name: `${faker.name.firstName()} ${faker.name.lastName()}`,
// avatar: faker.internet.avatar(),
// email: faker.internet.email(),
// city: faker.address.city(),
// zipcode: faker.address.zipCode(),
// level: faker.random.arrayElement(['beginner','intermediate','advanced']),
// preferCategory: faker.random.arrayElement(['bouldering','free solo','sport climbing','roped climbing', 'traditional climbing']),
// preferClimb: faker.random.arrayElement(['indoor','outdoor','anywhere']),
// climbSince: faker.date.past(),