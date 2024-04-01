import React from 'react'
import { useState } from 'react';

const Square = () => {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
    //console.log("clicked!")
  }

  return (
    <button
      className="square"
      onClick = {handleClick}
    >
      {value}
    </button>
  )
}

export default Square