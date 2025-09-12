import React from 'react'
import PersonalDetailPreview from '../preview/PersonalDetailPreview'
import SummeryPreview from '../preview/SummeryPreview'
import ExperiencePreview from '../preview/ExperiencePreview'
import EducationalPreview from '../preview/EducationalPreview'
import SkillsPreview from '../preview/SkillsPreview'
import ProjectsPreview from '../preview/ProjectsPreview'
import CertificationsPreview from '../preview/CertificationsPreview'
import InterestsPreview from '../preview/InterestsPreview'

function ExecutiveTemplate({ resumeInfo }) {
    return (
        <div className='h-full bg-slate-50 flex'>
            {/* Left Sidebar */}
            <div className='w-1/3 p-6 bg-slate-800 text-white overflow-y-auto'
                style={{
                    borderTop: `6px solid ${resumeInfo?.themeColor}`
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
            <div className='w-2/3 p-8 bg-white overflow-y-auto'>
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

export default ExecutiveTemplate
