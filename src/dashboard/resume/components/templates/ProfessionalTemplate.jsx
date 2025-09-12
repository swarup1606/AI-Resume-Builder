import React from 'react'
import PersonalDetailPreview from '../preview/PersonalDetailPreview'
import SummeryPreview from '../preview/SummeryPreview'
import ExperiencePreview from '../preview/ExperiencePreview'
import EducationalPreview from '../preview/EducationalPreview'
import SkillsPreview from '../preview/SkillsPreview'
import ProjectsPreview from '../preview/ProjectsPreview'
import CertificationsPreview from '../preview/CertificationsPreview'
import InterestsPreview from '../preview/InterestsPreview'

function ProfessionalTemplate({ resumeInfo }) {
    return (
        <div className='h-full bg-gradient-to-br from-slate-50 to-white relative overflow-hidden'>
            {/* Header Section */}
            <div className='h-40 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 relative shadow-lg'
                style={{
                    background: `linear-gradient(135deg, #1e293b, #334155, #1e293b)`
                }}>
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                                        radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
                        backgroundSize: '20px 20px'
                    }}></div>
                
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-full h-1"
                    style={{ background: `linear-gradient(90deg, ${resumeInfo?.themeColor}, transparent)` }}></div>
                
                {/* Personal Detail in header */}
                <div className="absolute inset-0 flex items-center justify-center text-white px-8">
                    <div className="text-center max-w-full">
                        <h2 className='font-bold text-3xl mb-3 text-white tracking-wide'
                            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                            {resumeInfo?.firstName} {resumeInfo?.lastName}
                        </h2>
                        <h2 className='text-xl font-medium text-white/90 mb-6 tracking-wide'>
                            {resumeInfo?.jobTitle}
                        </h2>
                        <div className='space-y-3 text-sm text-white/85'>
                            <div className='flex items-center justify-center gap-2'>
                                <div className='w-1 h-1 rounded-full bg-white/60'></div>
                                <span>{resumeInfo?.address}</span>
                            </div>
                            <div className='flex justify-center gap-8'>
                                <span className='flex items-center gap-2'>
                                    <div className='w-1 h-1 rounded-full'
                                        style={{ backgroundColor: resumeInfo?.themeColor }}></div>
                                    {resumeInfo?.phone}
                                </span>
                                <span className='flex items-center gap-2'>
                                    <div className='w-1 h-1 rounded-full'
                                        style={{ backgroundColor: resumeInfo?.themeColor }}></div>
                                    {resumeInfo?.email}
                                </span>
                            </div>
                            {(resumeInfo?.github || resumeInfo?.linkedin) && (
                                <div className='flex justify-center gap-8 pt-2'>
                                    {resumeInfo?.github && (
                                        <a href={resumeInfo.github} target="_blank" rel="noopener noreferrer"
                                           className='hover:underline text-white/80 transition-all duration-200 hover:text-white'>
                                            GitHub
                                        </a>
                                    )}
                                    {resumeInfo?.linkedin && (
                                        <a href={resumeInfo.linkedin} target="_blank" rel="noopener noreferrer"
                                           className='hover:underline text-white/80 transition-all duration-200 hover:text-white'>
                                            LinkedIn
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Main Content */}
            <div className='p-10 bg-gradient-to-br from-slate-50 to-white'>
                {/* Summery */}
                <div className="mb-10 p-6 rounded-xl bg-white shadow-sm border-l-4"
                    style={{ borderLeftColor: resumeInfo?.themeColor }}>
                    <SummeryPreview resumeInfo={resumeInfo} />
                </div>
                
                {/* Two Column Layout */}
                <div className="grid grid-cols-2 gap-10">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* Professional Experience */}
                        {resumeInfo?.Experience?.length > 0 && (
                            <div className="p-6 rounded-xl bg-white shadow-sm">
                                <ExperiencePreview resumeInfo={resumeInfo} />
                            </div>
                        )}
                        
                        {/* Projects */}
                        {resumeInfo?.projects?.length > 0 && (
                            <div className="p-6 rounded-xl bg-white shadow-sm">
                                <ProjectsPreview resumeInfo={resumeInfo} />
                            </div>
                        )}
                    </div>
                    
                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Educational */}
                        {resumeInfo?.education?.length > 0 && (
                            <div className="p-6 rounded-xl bg-white shadow-sm">
                                <EducationalPreview resumeInfo={resumeInfo} />
                            </div>
                        )}
                        
                        {/* Skills */}
                        {resumeInfo?.skills?.length > 0 && (
                            <div className="p-6 rounded-xl bg-white shadow-sm">
                                <SkillsPreview resumeInfo={resumeInfo} />
                            </div>
                        )}
                        
                        {/* Certifications */}
                        {resumeInfo?.certifications?.length > 0 && (
                            <div className="p-6 rounded-xl bg-white shadow-sm">
                                <CertificationsPreview resumeInfo={resumeInfo} />
                            </div>
                        )}
                        
                        {/* Interests */}
                        {resumeInfo?.interests?.length > 0 && (
                            <div className="p-6 rounded-xl bg-white shadow-sm">
                                <InterestsPreview resumeInfo={resumeInfo} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalTemplate