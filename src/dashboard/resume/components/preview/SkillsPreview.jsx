import React from 'react'
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react'

function SkillsPreview({resumeInfo}) {
  const skillIcons = {
    'javascript': Code,
    'react': Code,
    'node': Code,
    'python': Code,
    'java': Code,
    'css': Palette,
    'html': Palette,
    'design': Palette,
    'ui/ux': Palette,
    'database': Database,
    'sql': Database,
    'mongodb': Database,
    'web': Globe,
    'mobile': Smartphone,
    'android': Smartphone,
    'ios': Smartphone,
    'default': Zap
  }

  const getSkillIcon = (skillName) => {
    const lowerSkill = skillName.toLowerCase()
    for (const [key, icon] of Object.entries(skillIcons)) {
      if (lowerSkill.includes(key)) {
        return icon
      }
    }
    return skillIcons.default
  }

  return (
    <div className='my-6'>
      <h2 className='text-center font-bold text-sm mb-2'
        style={{
          color: resumeInfo?.themeColor
        }}
      >Skills</h2>
      <hr style={{
        borderColor: resumeInfo?.themeColor
      }} />

      <div className='flex flex-wrap gap-3 my-4'>
        {resumeInfo?.skills.map((skill, index) => {
          const IconComponent = getSkillIcon(skill.name)
          return (
            <div key={index} 
              className="px-4 py-2 rounded-lg text-xs font-medium text-white shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 border-2 border-transparent hover:border-white/20"
              style={{
                backgroundColor: resumeInfo?.themeColor
              }}
            >
              <IconComponent className="h-3 w-3" />
              {skill.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsPreview