import React, { useContext, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { FileText, Check } from 'lucide-react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import GlobalApi from './../../../../service/GlobalApi'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

function TemplateSelector() {
    const templates = [
        {
            id: 'classic',
            name: 'Classic',
            description: 'Clean and professional layout',
            preview: 'bg-gray-100 border-2 border-gray-300',
            style: 'classic'
        },
        {
            id: 'modern',
            name: 'Modern',
            description: 'Sleek design with geometric patterns',
            preview: 'bg-gradient-to-br from-slate-50 to-blue-100 border-2 border-blue-300',
            style: 'modern'
        },
        {
            id: 'creative',
            name: 'Creative',
            description: 'Colorful and eye-catching design',
            preview: 'bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300',
            style: 'creative'
        },
        {
            id: 'corporate',
            name: 'Corporate',
            description: 'Executive layout with gradient sidebar',
            preview: 'bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-gray-400',
            style: 'corporate'
        },
        {
            id: 'executive',
            name: 'Executive',
            description: 'Professional with dark sidebar',
            preview: 'bg-slate-50 border-2 border-slate-300',
            style: 'executive'
        },
        {
            id: 'professional',
            name: 'Professional',
            description: 'Premium design with blue gradient',
            preview: 'bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-300',
            style: 'professional'
        }
    ]

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [selectedTemplate, setSelectedTemplate] = useState(resumeInfo?.template || 'classic');
    const { resumeId } = useParams();

    const onTemplateSelect = (template) => {
        setSelectedTemplate(template.id);
        setResumeInfo({
            ...resumeInfo,
            template: template.id
        });
        
        const data = {
            data: {
                template: template.id
            }
        }
        GlobalApi.UpdateResumeDetail(resumeId, data).then(resp => {
            console.log(resp);
            toast('Template Updated')
        })
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" 
                    className="flex gap-2">
                    <FileText /> Template
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <h2 className='mb-4 text-sm font-bold'>Select Resume Template</h2>
                <div className='grid grid-cols-2 gap-3'>
                    {templates.map((template) => (
                        <div 
                            key={template.id}
                            onClick={() => onTemplateSelect(template)}
                            className={`relative p-3 rounded-lg cursor-pointer border-2 transition-all hover:shadow-md ${
                                selectedTemplate === template.id 
                                    ? 'border-blue-500 bg-blue-50' 
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            {selectedTemplate === template.id && (
                                <div className="absolute top-2 right-2">
                                    <Check className="h-4 w-4 text-blue-500" />
                                </div>
                            )}
                            <div className={`h-16 rounded ${template.preview} mb-2`}></div>
                            <h3 className='text-sm font-medium'>{template.name}</h3>
                            <p className='text-xs text-gray-500'>{template.description}</p>
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default TemplateSelector
