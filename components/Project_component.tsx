import React from 'react';
import Image from 'next/image';

interface ProjectComponentProps {
  imgSrc: string;
  demoTitle: string;
  description: string;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ imgSrc, demoTitle, description }) => {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:gap-16'>
        <Image className='rounded-lg mb-6 sm:mb-0 mt-4' src={imgSrc} alt={'phone'} width={560} height={560} />
        <div className='flex flex-col gap-4'>
            <h1 className='text-lg font-bold mt-6'>{demoTitle}</h1>
            <p>{description}</p>
            <div className="flex flex-col sm:flex-row justify-start sm:justify-start gap-4 sm:gap-8">
                <div className='px-4 bg-white text-black py-1 rounded-md cursor-pointer hover:opacity-90 shadow-md' >
                    <i className='pi pi-github pr-2 pt-1'></i>
                    <span>Github</span>
                </div>
                <div className='px-4 bg-white text-black py-1 rounded-md cursor-pointer hover:opacity-90 shadow-md' >
                    <i className='pi pi-arrow-up-right pr-2 pt-1'></i>
                    <span>Live demo</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProjectComponent;
