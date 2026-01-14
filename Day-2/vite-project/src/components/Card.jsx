import React from 'react'

const Card = (props) => {

  return (
    <div>
     <input placeholder='enter value' type='text' onChange={(e) => props.setValue(e.target.value)}/>
     <p>Name State variable ki inside value : {props.name}</p>
    </div>
  )
}

export default Card