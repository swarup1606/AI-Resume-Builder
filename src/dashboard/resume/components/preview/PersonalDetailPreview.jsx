import React from 'react'

function PersonalDetailPreview({resumeInfo}) {
  return (
    <div>
        <h2 className='font-bold text-xl text-center'
        style={{
            color:resumeInfo?.themeColor
        }}
        >
            {resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
        <h2 className='text-center text-sm font-medium text-gray-800'
       >{resumeInfo?.jobTitle}</h2>
       <h2 className='text-center font-normal text-xs'
        style={{
            color:resumeInfo?.themeColor
        }}>{resumeInfo?.address}</h2>

        <div className='flex justify-between'>
            <h2 className='font-normal text-xs'
             style={{
                color:resumeInfo?.themeColor
            }}>{resumeInfo?.phone}</h2>
            <h2 className='font-normal text-xs'
             style={{
                color:resumeInfo?.themeColor
            }}>{resumeInfo?.email}</h2>
        </div>
        
        {(resumeInfo?.github || resumeInfo?.linkedin) && (
            <div className='flex justify-between mt-1'>
                {resumeInfo?.github && (
                    <a href={resumeInfo.github} target="_blank" rel="noopener noreferrer"
                       className='font-normal text-xs hover:underline'
                       style={{
                           color:resumeInfo?.themeColor
                       }}>
                        GitHub
                    </a>
                )}
                {resumeInfo?.linkedin && (
                    <a href={resumeInfo.linkedin} target="_blank" rel="noopener noreferrer"
                       className='font-normal text-xs hover:underline'
                       style={{
                           color:resumeInfo?.themeColor
                       }}>
                        LinkedIn
                    </a>
                )}
            </div>
        )}
        <hr className='border-[1.5px] my-2'
        style={{
            borderColor:resumeInfo?.themeColor
        }}
        />
    </div>
  )
}

export default PersonalDetailPreview