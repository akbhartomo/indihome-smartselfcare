import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function PageContainerMobile({
  children,
  scrollable = true
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <>
      {scrollable ? (
        <ScrollArea className='h-[calc(100dvh-52px)]'>
          <div className='max-w-3xl m-auto relative flex flex-1 p-4 md:px-6'>{children}</div>
        </ScrollArea>
      ) : (
        <div className='max-w-3xl m-auto relative flex flex-1 p-4 md:px-6'>{children}</div>
      )}
    </>
  );
}
