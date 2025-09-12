import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import TemplateWrapper from './TemplateWrapper'

function ResumePreview() {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)

    return (
        <TemplateWrapper resumeInfo={resumeInfo} />
    )
}

export default ResumePreview