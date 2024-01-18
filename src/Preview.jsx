import React from 'react'

function Preview( {PreviewHeading,previewValue} ) {

  
  return (
    <>
      <div className="row my-4">
          <div className="col-12">
            <h4 className='text-light'>{PreviewHeading}</h4>
          </div>
          <div className="col-12">
              <div className="form-floating">
                  <div className="form-control" style={{maxHeight:'300px', minHeight:'300px'}}>{previewValue}</div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Preview
