import React from 'react'

function TextArea({setTextValue, textValue, handleCount}) {


  return (
    <>
       <div className="row mb-4">
          <div className="col-12">
          <div className="form-floating">
              <textarea className="form-control" id="floatingTextarea2" style={{maxHeight:'300px', minHeight:'300px'}} value={textValue} onChange={(e)=>{setTextValue(e.target.value)}} onKeyUp={handleCount}></textarea>
            </div>
          </div>
        </div>
    </>
  )
}

export default TextArea
