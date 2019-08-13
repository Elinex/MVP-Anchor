import React from 'react';
import Item from './Item.jsx';

const styles = {
  mainDiv: {
    display: 'inline-flex'
  }
}

const List = ({users}) => {
  console.log(users)
  return (
    <div style={styles.mainDiv}>
      {users.map(user => <Item user={user} key={user.id} />)}
    </div>
  )
}

export default List;