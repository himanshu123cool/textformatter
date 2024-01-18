import React from 'react'
import Button from './Button'

function ButtonContainer( {btnValue} ) {

    const input_button = [
        {
            key:'1',
            btnvalue:"Uppercase"
        },
        {
            key:'2',
            btnvalue:"Lowercase"
        },
        {
            key:'3',
            btnvalue:"Capitalise"
        },
        {
            key:'4',
            btnvalue:"Trim"
        },
        {
            key:'5',
            btnvalue:"Bold"
        },
        {
            key:'6',
            btnvalue:"Italic"
        },
        {
            key:'7',
            btnvalue:"Underline"
        },
        {
            key:'8',
            btnvalue:"Remove Extra Space"
        },
        {
            key:'9',
            btnvalue:"Clean Up"
        },
    ]

  return (
    <>
      <div className="row">
          <div className="col-12 d-flex justify-content-evenly flex-wrap">
            {input_button.map((item)=>{
                return (
                    <Button key={item.key} singleBtnValue={item.btnvalue} btnValue={btnValue}/>
                )
            })}
          </div>
        </div>
    </>
  )
}

export default ButtonContainer
