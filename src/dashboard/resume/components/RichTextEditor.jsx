import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'
import { AIChatSession } from './../../../../service/AIModal';
import { toast } from 'sonner';
const PROMPT='Position title: {positionTitle}. Based on this title, write 5 resume bullet points as HTML only. Return a single <ul> with <li> items, no markdown, no JSON, no explanations.'
function RichTextEditor({onRichTextEditorChange,index,defaultValue}) {
    const [value,setValue]=useState(defaultValue || '');
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const [loading,setLoading]=useState(false);
    const toHtmlList = (items) => {
      if (!Array.isArray(items)) return '';
      const listItems = items
        .filter((t) => typeof t === 'string' && t.trim().length > 0)
        .map((t) => `<li>${t}</li>`)
        .join('');
      return listItems ? `<ul>${listItems}</ul>` : '';
    };

    const normalizeToHtml = (text) => {
      if (!text) return '';
      const trimmed = text.trim();
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) return toHtmlList(parsed);
        if (parsed && Array.isArray(parsed.bullet_points)) return toHtmlList(parsed.bullet_points);
      } catch (_) {}
      if (trimmed.includes('<li')) return trimmed;
      const lines = trimmed
        .split(/\r?\n|\u2022|\-/)
        .map((s) => s.replace(/^\s*[-•]\s*/, '').trim())
        .filter((s) => s.length > 0);
      return toHtmlList(lines);
    };

    const GenerateSummeryFromAI=async()=>{
      if(!resumeInfo?.Experience?.[index]?.title) {
        toast('Please Add Position Title');
        return ;
      }
      setLoading(true)
      const prompt=PROMPT.replace('{positionTitle}',resumeInfo.Experience[index].title);
      try {
        const result=await AIChatSession.sendMessage(prompt);
        const resp=await result.response.text();
        const html = normalizeToHtml(resp);
        setValue(html);
        if (typeof onRichTextEditorChange === 'function') {
          onRichTextEditorChange({ target: { value: html } });
        }
      } catch (e) {
        toast('Failed to generate summary');
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
  
    return (
    <div>
      <div className='flex justify-between my-2'>
        <label className='text-xs'>Summery</label>
        <Button variant="outline" size="sm" 
        onClick={GenerateSummeryFromAI}
        disabled={loading}
        className="flex gap-2 border-primary text-primary">
          {loading?
          <LoaderCircle className='animate-spin'/>:  
          <>
           <Brain className='h-4 w-4'/> Generate from AI 
           </>
        }
         </Button>
      </div>
    <EditorProvider>
      <Editor value={value} onChange={(e)=>{
        setValue(e.target.value);
        onRichTextEditorChange(e)
      }}>
         <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
         
         
        </Toolbar>
      </Editor>
      </EditorProvider>
    </div>
  )
}

export default RichTextEditor