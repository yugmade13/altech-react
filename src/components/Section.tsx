import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode
  id?: string
  style?: string
}

const Section: React.FC<SectionProps> = ({ children, style, id }) => {

  return (
    <section id={id} className={`relative w-full py-14 lg:py-32 overflow-x-hidden ${style}`}>
      <div className="max-w-[1440px] mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

export default Section;