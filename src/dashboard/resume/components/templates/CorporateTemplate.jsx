import React from 'react'
import PersonalDetailPreview from '../preview/PersonalDetailPreview'
import SummeryPreview from '../preview/SummeryPreview'
import ExperiencePreview from '../preview/ExperiencePreview'
import EducationalPreview from '../preview/EducationalPreview'
import SkillsPreview from '../preview/SkillsPreview'
import ProjectsPreview from '../preview/ProjectsPreview'
import CertificationsPreview from '../preview/CertificationsPreview'
import InterestsPreview from '../preview/InterestsPreview'

function CorporateTemplate({ resumeInfo }) {
    return (
        <div className='h-full bg-gradient-to-r from-gray-100 to-gray-50 flex'>
            {/* Left Sidebar */}
            <div className='w-2/5 p-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white overflow-y-auto'
                style={{
                    borderTop: `8px solid ${resumeInfo?.themeColor}`,
                    borderRight: `3px solid ${resumeInfo?.themeColor}`
                }}>
                {/* Personal Detail in sidebar */}
                <div className="mb-6">
                    <PersonalDetailPreview resumeInfo={resumeInfo} />
                </div>
                
                {/* Skills in sidebar */}
                {resumeInfo?.skills?.length > 0 && (
                    <div className="mb-6">
                        <SkillsPreview resumeInfo={resumeInfo} />
                    </div>
                )}
                
                {/* Certifications in sidebar */}
                {resumeInfo?.certifications?.length > 0 && (
                    <div className="mb-6">
                        <CertificationsPreview resumeInfo={resumeInfo} />
                    </div>
                )}
                
                {/* Interests in sidebar */}
                {resumeInfo?.interests?.length > 0 && (
                    <div>
                        <InterestsPreview resumeInfo={resumeInfo} />
                    </div>
                )}
            </div>
            
            {/* Main Content */}
            <div className='w-3/5 p-8 bg-white relative overflow-y-auto'>
                {/* Decorative line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                
                {/* Summery */}
                <div className="mb-8">
                    <SummeryPreview resumeInfo={resumeInfo} />
                </div>
                
                {/* Professional Experience */}
                {resumeInfo?.Experience?.length > 0 && (
                    <div className="mb-8">
                        <ExperiencePreview resumeInfo={resumeInfo} />
                    </div>
                )}
                
                {/* Projects */}
                {resumeInfo?.projects?.length > 0 && (
                    <div className="mb-8">
                        <ProjectsPreview resumeInfo={resumeInfo} />
                    </div>
                )}
                
                {/* Educational */}
                {resumeInfo?.education?.length > 0 && (
                    <div>
                        <EducationalPreview resumeInfo={resumeInfo} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default CorporateTemplate
