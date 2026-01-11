import React from 'react'
import "./UserCard.css"

const UserCard = (props) => {
    return (
        <div className='c-1-main'>
            <p>{props.name}</p>
            <img id='user-img' src={props.myImage} alt='image'/>
            <h5>{props.description  }</h5>
        </div>
    )
}

export default UserCard