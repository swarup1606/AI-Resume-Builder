import React from 'react'

function ProjectsPreview({ resumeInfo }) {
  if (!resumeInfo?.projects || resumeInfo.projects.length === 0) {
    return null
  }

  return (
    <div className='my-6'>
      <h2 className='text-center font-bold text-sm mb-2'
        style={{
          color: resumeInfo?.themeColor
        }}
      >Projects</h2>
      <hr style={{
        borderColor: resumeInfo?.themeColor
      }} />

      {resumeInfo.projects.map((project, index) => (
        <div key={index} className='my-5'>
          <h2 className='text-sm font-bold'
            style={{
              color: resumeInfo?.themeColor
            }}
          >{project.title}</h2>
          <h2 className='text-xs flex justify-between text-gray-800'>
            Tech Stack: {project.techStack}
            <span>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline mr-2"
                  style={{ color: resumeInfo?.themeColor }}
                >
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: resumeInfo?.themeColor }}
                >
                  Live Demo
                </a>
              )}
            </span>
          </h2>
          <p className='text-xs my-2 text-gray-800'>
            {project.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ProjectsPreview
