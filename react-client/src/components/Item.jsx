import React from 'react';
import moment from 'moment';
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up';
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down';
import IoChatbubbleWorking from 'react-icons/lib/io/chatbubble-working';


const styles = {
  mainDiv: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    height: '340px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.15)',
    fontSize: '0.8em',
    color: 'rgba(0,0,0,.6)',
    textAlign: 'center',
    padding: '20px 0 10px 0',
    lineHeight: '1.6em',
    backgroundColor: '#fff',
    margin: '15px'
  },
  img: {
    backgroundColor: '#fff',
    border: '2px solid #fff',
    boxShadow: '0 0 3px 0 rgba(0,0,0,.2)',
    width: '150px',
    height: '150px',
    boxSizing: 'border-box',
    backgroundClip: 'content-box',
    borderRadius: '50%'
  },
  divName: {
    margin: '10px 0 10px 0'
  },
  name: {
    fontSize: '1.2em',
    wordBreak: 'break-all',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#665ed0',
    fontWeight: 'bold'
  },
  location: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'rgba(0,0,0,.6)'
  },
  climbSince: {
    flex: '1 100%'
  },
  iconDiv: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}

const Item = ({user, changeView}) => {
  return (
    <div style={styles.mainDiv}>
      <div>
        <img src={user.avatar} style={styles.img}></img>
      </div>
      <div style={styles.divName}>
        <span style={styles.name}>{user.name}</span>
        <br></br>
        <span style={styles.location}>{user.city}, {user.state}</span>
      </div>
      <div>
        <span>Prefered category </span>
        <span style={{color: '#665ed0', fontSize: '1.2em'}}>{user.preferCategory}</span>
      </div>
      <div>
        <span>Prefer climbing in </span>
        <span style={{color: '#665ed0', fontSize: '1.2em'}}>{user.preferClimb}</span>
      </div>
      <div>
        <span>Level </span>
        <span style={{color: '#665ed0', fontSize: '1.2em'}}>{user.level}</span>
      </div>
      <div style={styles.climbSince}>
        <span>Climb since  {moment(user.climbSince, "YYYYMMDD").fromNow()}</span>
      </div>
      {user.status === 'none' && (
        <div style={styles.iconDiv}>
          <TiThumbsUp height={25} width={25} color='#665ed0'/>
          <TiThumbsDown height={25} width={25} color='#665ed0'/>
        </div>
      )}
      {user.status === 'liked' && (
        <div style={styles.iconDiv}>
          <IoChatbubbleWorking
            height={25}
            width={25}
            color='#665ed0'
            onClick={() => changeView('userClicked', user)}
          />
        </div>
      )}
    </div>
  )
}

export default Item;