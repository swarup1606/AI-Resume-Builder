import React from 'react'
import { Heart } from 'lucide-react'

function InterestsPreview({ resumeInfo }) {
  if (!resumeInfo?.interests || resumeInfo.interests.length === 0) {
    return null
  }

  return (
    <div className='my-6'>
      <h2 className='text-center font-bold text-sm mb-2'
        style={{
          color: resumeInfo?.themeColor
        }}
      >Interests</h2>
      <hr style={{
        borderColor: resumeInfo?.themeColor
      }} />

      <div className="flex flex-wrap gap-2 mt-4">
        {resumeInfo.interests.map((interest, index) => (
          <div
            key={index}
            className="px-3 py-2 rounded-full text-xs font-medium text-white shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-1"
            style={{
              backgroundColor: resumeInfo?.themeColor
            }}
          >
            <Heart className="h-3 w-3" />
            {interest}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InterestsPreview
