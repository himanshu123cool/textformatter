import React from 'react'

function Heading( { myHeading } ) {
  return (
    <>
    <div className="row">
          <div className="col-12">
              <h1 className='text-center text-light mb-4'>{myHeading}</h1>
          </div>
        </div>
    </>
  )
}

export default Heading
