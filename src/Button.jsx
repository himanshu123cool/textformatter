import React from 'react'

function Button( {singleBtnValue, btnValue}) {

  const btnText = ()=>{
      btnValue(singleBtnValue);
  }

  return (
    <>
     <button className='btn fs-5 input_btn' onClick={btnText}>{singleBtnValue}</button> 
    </>
  )
}

export default Button
