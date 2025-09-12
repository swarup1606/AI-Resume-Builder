import React from 'react'
import PersonalDetailPreview from '../preview/PersonalDetailPreview'
import SummeryPreview from '../preview/SummeryPreview'
import ExperiencePreview from '../preview/ExperiencePreview'
import EducationalPreview from '../preview/EducationalPreview'
import SkillsPreview from '../preview/SkillsPreview'
import ProjectsPreview from '../preview/ProjectsPreview'
import CertificationsPreview from '../preview/CertificationsPreview'
import InterestsPreview from '../preview/InterestsPreview'

function CreativeTemplate({ resumeInfo }) {
    return (
        <div className='h-full p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden'
            style={{
                borderTop: `8px solid ${resumeInfo?.themeColor}`,
                boxShadow: `0 0 20px rgba(0,0,0,0.1), inset 0 0 0 2px ${resumeInfo?.themeColor}30`
            }}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10"
                style={{ background: resumeInfo?.themeColor }}></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-10"
                style={{ background: resumeInfo?.themeColor }}></div>
            
            <div className="relative z-10">
                {/* Personal Detail with creative styling */}
                <div className="mb-4 p-3 rounded-xl bg-white/70 backdrop-blur-sm"
                    style={{ border: `2px solid ${resumeInfo?.themeColor}40` }}>
                    <PersonalDetailPreview resumeInfo={resumeInfo} />
                </div>
                
                {/* Summery with creative accent */}
                <div className="mb-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm"
                    style={{ borderLeft: `3px solid ${resumeInfo?.themeColor}` }}>
                    <SummeryPreview resumeInfo={resumeInfo} />
                </div>
                
                {/* Professional Experience */}
                {resumeInfo?.Experience?.length > 0 && (
                    <div className="mb-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm">
                        <ExperiencePreview resumeInfo={resumeInfo} />
                    </div>
                )}
                
                {/* Projects */}
                {resumeInfo?.projects?.length > 0 && (
                    <div className="mb-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm">
                        <ProjectsPreview resumeInfo={resumeInfo} />
                    </div>
                )}
                
                {/* Educational */}
                {resumeInfo?.education?.length > 0 && (
                    <div className="mb-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm">
                        <EducationalPreview resumeInfo={resumeInfo} />
                    </div>
                )}
                
                {/* Skills */}
                {resumeInfo?.skills?.length > 0 && (
                    <div className="mb-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm">
                        <SkillsPreview resumeInfo={resumeInfo} />
                    </div>
                )}
                
                {/* Certifications and Interests - Side by Side */}
                {(resumeInfo?.certifications?.length > 0 || resumeInfo?.interests?.length > 0) && (
                    <div className="flex gap-3">
                        <div className="flex-1 p-3 rounded-lg bg-white/60 backdrop-blur-sm">
                            <CertificationsPreview resumeInfo={resumeInfo} />
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-white/60 backdrop-blur-sm">
                            <InterestsPreview resumeInfo={resumeInfo} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CreativeTemplate