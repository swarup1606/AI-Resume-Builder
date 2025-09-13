// src/.../resume-enhancer/index.jsx
import React, { Suspense, lazy } from 'react';
const ResumeEnhancer = lazy(() => import('./ResumeEnhancer'));

export default function ResumeEnhancerWrapper() {
  return (
    <Suspense fallback={<div>Loading resume enhancer…</div>}>
      <ResumeEnhancer />
    </Suspense>
  );
}
