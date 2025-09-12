import React from 'react'
import PersonalDetailPreview from '../preview/PersonalDetailPreview'
import SummeryPreview from '../preview/SummeryPreview'
import ExperiencePreview from '../preview/ExperiencePreview'
import EducationalPreview from '../preview/EducationalPreview'
import SkillsPreview from '../preview/SkillsPreview'
import ProjectsPreview from '../preview/ProjectsPreview'
import CertificationsPreview from '../preview/CertificationsPreview'
import InterestsPreview from '../preview/InterestsPreview'

function ModernTemplate({ resumeInfo }) {
    return (
        <div className='h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden'
            style={{
                borderTop: `6px solid ${resumeInfo?.themeColor}`,
                boxShadow: `0 10px 40px rgba(0,0,0,0.1), inset 0 0 0 1px ${resumeInfo?.themeColor}20`
            }}>
            {/* Enhanced Modern geometric patterns */}
            <div className="absolute top-0 right-0 w-40 h-40 opacity-5"
                style={{ 
                    background: `linear-gradient(45deg, ${resumeInfo?.themeColor}, transparent)`,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
                }}></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-5"
                style={{ 
                    background: `linear-gradient(45deg, transparent, ${resumeInfo?.themeColor})`,
                    clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
                }}></div>
            <div className="absolute top-1/3 left-1/4 w-20 h-20 opacity-3 rounded-full"
                style={{ backgroundColor: resumeInfo?.themeColor }}></div>
            <div className="absolute bottom-1/4 right-1/3 w-16 h-16 opacity-4 transform rotate-45"
                style={{ backgroundColor: resumeInfo?.themeColor }}></div>
            
            <div className="relative z-10 p-6">
                {/* Personal Detail with modern card styling - reduced spacing */}
                <div className="mb-3 p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border-l-4"
                    style={{ borderLeftColor: resumeInfo?.themeColor }}>
                    <PersonalDetailPreview resumeInfo={resumeInfo} />
                </div>
                
                {/* Summery with modern accent - reduced spacing */}
                <div className="mb-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-md">
                    <SummeryPreview resumeInfo={resumeInfo} />
                </div>
                
                {/* Professional Experience - reduced spacing */}
                {resumeInfo?.Experience?.length > 0 && (
                    <div className="mb-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-md">
                        <ExperiencePreview resumeInfo={resumeInfo} />
                    </div>
                )}
                
                {/* Projects - reduced spacing */}
                {resumeInfo?.projects?.length > 0 && (
                    <div className="mb-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-md">
                        <ProjectsPreview resumeInfo={resumeInfo} />
                    </div>
                )}
                
                {/* Educational - reduced spacing */}
                {resumeInfo?.education?.length > 0 && (
                    <div className="mb-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-md">
                        <EducationalPreview resumeInfo={resumeInfo} />
                    </div>
                )}
                
                {/* Skills - reduced spacing */}
                {resumeInfo?.skills?.length > 0 && (
                    <div className="mb-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-md">
                        <SkillsPreview resumeInfo={resumeInfo} />
                    </div>
                )}
                
                {/* Certifications and Interests - Side by Side with reduced spacing */}
                {(resumeInfo?.certifications?.length > 0 || resumeInfo?.interests?.length > 0) && (
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-md">
                            <CertificationsPreview resumeInfo={resumeInfo} />
                        </div>
                        <div className="p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-md">
                            <InterestsPreview resumeInfo={resumeInfo} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ModernTemplate
