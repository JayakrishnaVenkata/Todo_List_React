import React from 'react'
// import { useState } from 'react'

const List = (props) => {
  return( 
    <div onClick={()=>{props.onCheck(props.id)}}>
         <li>{props.items}</li>
    </div>
    )
}

export default List