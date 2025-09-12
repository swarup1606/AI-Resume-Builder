import React from 'react'
import ClassicTemplate from './templates/ClassicTemplate'
import ModernTemplate from './templates/ModernTemplate'
import CreativeTemplate from './templates/CreativeTemplate'
import CorporateTemplate from './templates/CorporateTemplate'
import ExecutiveTemplate from './templates/ExecutiveTemplate'
import ProfessionalTemplate from './templates/ProfessionalTemplate'

function TemplateWrapper({ resumeInfo }) {
    const template = resumeInfo?.template || 'classic'

    const renderTemplate = () => {
        switch (template) {
            case 'classic':
                return <ClassicTemplate resumeInfo={resumeInfo} />
            case 'modern':
                return <ModernTemplate resumeInfo={resumeInfo} />
            case 'creative':
                return <CreativeTemplate resumeInfo={resumeInfo} />
            case 'corporate':
                return <CorporateTemplate resumeInfo={resumeInfo} />
            case 'executive':
                return <ExecutiveTemplate resumeInfo={resumeInfo} />
            case 'professional':
                return <ProfessionalTemplate resumeInfo={resumeInfo} />
            default:
                return <ClassicTemplate resumeInfo={resumeInfo} />
        }
    }

    return renderTemplate()
}

export default TemplateWrapper
