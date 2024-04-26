import React from 'react'

const Text = ({ text }) => {

  const textArray = text.split(" ");
  console.log("SPLIT", textArray);

  return (
    <div className='text-container'>
      {textArray.map((word, index) => (
        <span key={index} className='word'> {word}</span>
      ))}
    </div>
  )
}

export default Text;
