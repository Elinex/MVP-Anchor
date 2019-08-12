import React from 'react';

import Item from './Item.jsx';

const List = ({users}) => {
  console.log(users)
  return (
    <div>
      {users.map(user => <Item user={user} />)}
    </div>
  )
}

export default List;