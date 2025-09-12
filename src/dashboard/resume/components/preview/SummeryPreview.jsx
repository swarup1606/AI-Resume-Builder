import React from 'react'

function SummeryPreview({resumeInfo}) {
  return (
    <p className='text-xs text-gray-800'>
        {resumeInfo?.summery}
    </p>
  )
}

export default SummeryPreview