import React from 'react'

function User(example) {
  return (
    <span className="user">
            <span className="name">{example.name}</span>
            <span className="handle">@{example.handle}</span>
          </span>
  )
}

export default User