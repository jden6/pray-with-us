"use client";

import {cn} from '@/lib/utils';

const ContentParser = ({contents}: { contents: string}) => {
  const contentsParsed = JSON.parse(contents || '[]');
  return <ul className={cn('max-h-[400px]','space-y-3', 'overflow-y-scroll')}>
    {contentsParsed.map((content: any, index:number) =>
      <li key={index}><strong>{index + 1}.</strong> {content.value}</li>)}
  </ul>;
};

export default ContentParser;