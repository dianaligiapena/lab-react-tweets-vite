import React from 'react'

function ProfileImage(example) {
  return (
    <img
        src={example.src}
        className="profile"
        alt="profile"
    />
  )
}

export default ProfileImage