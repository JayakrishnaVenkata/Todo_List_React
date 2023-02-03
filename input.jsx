import React from 'react'

const Input = (props) => {
  return (
    <>
        <div className="form">
            <input type="text" value={props.inputText} onChange={props.handleChange}/>
            <button onClick={props.handleClick}>
                <span>Add</span>
            </button>
        </div>
    </>
  )
}

export default Input