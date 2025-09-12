import React from 'react'
import { Award, Calendar, Building } from 'lucide-react'

function CertificationsPreview({ resumeInfo }) {
  if (!resumeInfo?.certifications || resumeInfo.certifications.length === 0) {
    return null
  }

  return (
    <div className='my-6'>
      <h2 className='text-center font-bold text-sm mb-2'
        style={{
          color: resumeInfo?.themeColor
        }}
      >Certifications</h2>
      <hr style={{
        borderColor: resumeInfo?.themeColor
      }} />

      {resumeInfo.certifications.map((cert, index) => (
        <div key={index} className='my-4 p-3 border-l-4 rounded-r-lg shadow-sm'
          style={{
            borderLeftColor: resumeInfo?.themeColor,
            backgroundColor: '#f8f9fa'
          }}
        >
          <div className="flex items-start gap-2 mb-2">
            <Award className="h-4 w-4 mt-0.5 flex-shrink-0" 
              style={{ color: resumeInfo?.themeColor }} 
            />
            <h3 className='text-sm font-bold text-gray-800 leading-tight break-words'
              style={{ color: resumeInfo?.themeColor }}
            >
              {cert.title}
            </h3>
          </div>
          
          <div className="ml-6 space-y-1">
            <div className="flex items-center gap-2">
              <Building className="h-3 w-3 text-gray-500 flex-shrink-0" />
              <span className='text-xs text-gray-600 break-words'>{cert.issuer}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3 text-gray-500 flex-shrink-0" />
              <span className='text-xs text-gray-600'>{cert.year}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CertificationsPreview
