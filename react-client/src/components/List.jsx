import React from 'react';
import Item from './Item.jsx';

const styles = {
  mainDiv: {
    display: 'inline-flex'
  }
}

const List = ({users, changeStatus, changeView}) => {
  return (
    <div style={styles.mainDiv}>
      {users.map(user => (
        <Item
          user={user}
          key={user.id}
          changeStatus={changeStatus}
          changeView={changeView}
        />
      ))}
    </div>
  )
}

export default List;