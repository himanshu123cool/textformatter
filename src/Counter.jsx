import React from 'react'

function Counter({wordHeading, characterHeading, characterCount, wordCount}) {
  return (
    <>
      <div className="row mt-4">
          <div className="col-6 d-flex align-items-center flex-wrap">
            <h5 className='text-light me-2'>{characterHeading}</h5>
            <div className="character_box myBox">{characterCount}</div>
          </div>
          <div className="col-6 d-flex align-items-center flex-wrap">
          <h5 className='text-light me-2'>{wordHeading}</h5>
          <div className="word_box myBox">{wordCount}</div>
          </div>
        </div>
    </>
  )
}

export default Counter
