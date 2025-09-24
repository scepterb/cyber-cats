import { useState } from 'react';

import './css/Annotation.css';

type AnnotationProps = {
  note: string;
  children: string;
};

export default function Annotation({ note, children } : AnnotationProps) {
  const [expanded, toggleAnnotation] = useState(false);

  return (
    <span className='annotation' onClick={() => toggleAnnotation(expanded? false : true)}>
      <span className='annotation-text'>
        { children }
      </span>
      <span className='annotation-icon'>*</span>
      <span className={`${expanded? 'note-is-visible' : 'note-is-hidden'}`}>
        { note }
      </span>
    </span>

  );
}