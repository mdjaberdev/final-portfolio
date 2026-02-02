import React from 'react'

const Images = ({srcImg, altImg, className}) => {
  return (
    <div>
      <img src={srcImg} alt={altImg} className={`${className}`}/>
    </div>
  )
}

export default Images
