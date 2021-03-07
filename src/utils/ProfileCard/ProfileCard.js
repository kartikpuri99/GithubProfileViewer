import React from 'react'
import './ProfileCard.css';


const ProfileCard = (props) => {
  return (
    <div className='profile-card text-center px-2 py-3 mb-5'>
      <div className='profile-card-number'>{props.number}</div>
      <div className='profile-card-name mt-2'>{props.name}</div>
    </div>
  )
}

export default ProfileCard
