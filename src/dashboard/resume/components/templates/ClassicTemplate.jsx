import React from 'react'
import PersonalDetailPreview from '../preview/PersonalDetailPreview'
import SummeryPreview from '../preview/SummeryPreview'
import ExperiencePreview from '../preview/ExperiencePreview'
import EducationalPreview from '../preview/EducationalPreview'
import SkillsPreview from '../preview/SkillsPreview'
import ProjectsPreview from '../preview/ProjectsPreview'
import CertificationsPreview from '../preview/CertificationsPreview'
import InterestsPreview from '../preview/InterestsPreview'

function ClassicTemplate({ resumeInfo }) {
    return (
        <div className='shadow-2xl h-full p-14 border-t-[20px] bg-white relative overflow-hidden'
            style={{
                borderColor: resumeInfo?.themeColor
            }}>
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform rotate-45"
                style={{ backgroundColor: resumeInfo?.themeColor }}>
            </div>
            <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5 rounded-full"
                style={{ backgroundColor: resumeInfo?.themeColor }}>
            </div>
            <div className="absolute top-1/2 right-8 w-16 h-16 opacity-5 transform rotate-12"
                style={{ backgroundColor: resumeInfo?.themeColor }}>
            </div>

            {/* Content Container */}
            <div className="relative z-10">
                {/* Personal Detail */}
                <PersonalDetailPreview resumeInfo={resumeInfo} />
                
                {/* Summery */}
                <SummeryPreview resumeInfo={resumeInfo} />
                
                {/* Professional Experience */}
                {resumeInfo?.Experience?.length > 0 && <ExperiencePreview resumeInfo={resumeInfo} />}
                
                {/* Projects */}
                {resumeInfo?.projects?.length > 0 && <ProjectsPreview resumeInfo={resumeInfo} />}
                
                {/* Educational */}
                {resumeInfo?.education?.length > 0 && <EducationalPreview resumeInfo={resumeInfo} />}
                
                {/* Skills */}
                {resumeInfo?.skills?.length > 0 && <SkillsPreview resumeInfo={resumeInfo} />}
                
                {/* Certifications and Interests - Side by Side with proper spacing */}
                {(resumeInfo?.certifications?.length > 0 || resumeInfo?.interests?.length > 0) && (
                    <div className="flex gap-8 mt-8">
                        <div className="flex-1">
                            <CertificationsPreview resumeInfo={resumeInfo} />
                        </div>
                        <div className="flex-1">
                            <InterestsPreview resumeInfo={resumeInfo} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ClassicTemplate
