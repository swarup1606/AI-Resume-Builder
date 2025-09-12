import React, { useState } from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
import Summery from './forms/Summery';
import Experience from './forms/Experience';
import Projects from './forms/Projects';
import Education from './forms/Education';
import Skills from './forms/Skills';
import Certifications from './forms/Certifications';
import Interests from './forms/Interests';
import { Link, Navigate, useParams } from 'react-router-dom';
import ThemeColor from './ThemeColor';
import TemplateSelector from './TemplateSelector';

function FormSection() {
  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const [enableNext,setEnableNext]=useState(true);
  const {resumeId}=useParams();
  return (
    <div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-5'>
            <Link to={"/dashboard"}>
          <Button><Home/></Button>
          </Link>
          <ThemeColor/>
          <TemplateSelector/>
         
          </div>
          <div className='flex gap-2'>
            {activeFormIndex>1
            &&<Button size="sm" 
            onClick={()=>setActiveFormIndex(activeFormIndex-1)}> <ArrowLeft/> </Button> }
            <Button 
            disabled={!enableNext}
            className="flex gap-2" size="sm"
            onClick={()=>setActiveFormIndex(activeFormIndex+1)}
            > Next 
            <ArrowRight/> </Button>
          </div>
        </div>
        {/* Personal Detail  */}
        {activeFormIndex==1?  
        <PersonalDetail enabledNext={(v)=>setEnableNext(v)} />
        :activeFormIndex==2?
              <Summery  enabledNext={(v)=>setEnableNext(v)} />
        :activeFormIndex==3?
          <Experience />  
          :activeFormIndex==4?
          <Projects enabledNext={(v)=>setEnableNext(v)} />
          :activeFormIndex==5?
          <Education/>
          :activeFormIndex==6?
          <Skills/>
          :activeFormIndex==7?
          <Certifications enabledNext={(v)=>setEnableNext(v)} />
          :activeFormIndex==8?
          <Interests enabledNext={(v)=>setEnableNext(v)} />
          :activeFormIndex==9?
          <Navigate to={'/my-resume/'+resumeId+"/view"}/>
              
        :null
          }
        

      {/* Experience  */}

      {/* Educational Detail  */}

      {/* Skills  */}

    </div>
  )
}

export default FormSection