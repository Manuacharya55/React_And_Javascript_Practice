import React from 'react'

const Card = ({username,email,avatar}) => {
  return (
    <div className="card">
        <img src={avatar} alt="" />
        <h3>{username}</h3>
        <p>{email}</p>
    </div>
  )
}

export default Card