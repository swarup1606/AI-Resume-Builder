import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';
import GlobalApi from './../../../../../service/GlobalApi';

function EditResume() {
    const {resumeId}=useParams();
    const [resumeInfo,setResumeInfo]=useState();
    useEffect(()=>{
       
        GetResumeInfo();
    },[])


    const GetResumeInfo=()=>{
        GlobalApi.GetResumeById(resumeId).then(resp=>{
          const apiData = resp?.data?.data;
          console.log(apiData);
          const normalized = apiData?.attributes ? { id: apiData.id, ...apiData.attributes } : apiData;
          setResumeInfo(normalized);
        })
    }

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
    <div className='min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
          {/* Form Section  */}
            <FormSection/>
          {/* Preview Section  */}
           <ResumePreview/>
      </div>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume