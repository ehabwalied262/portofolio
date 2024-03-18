'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import ProjectComponent from './Project_component';

const ProjectsSection: React.FC = () => {
    const [showPhoneList, setShowPhoneList] = useState(false);
    const [showWebsiteList, setShowWebsiteList] = useState(false);

    const togglePhoneList = () => {
        setShowPhoneList(!showPhoneList);
        setShowWebsiteList(false);
    };

    const toggleWebsiteList = () => {
        setShowWebsiteList(!showWebsiteList);
        setShowPhoneList(false);
    };

    return (
        <div className="flex justify-center items-start px-8 h-screen w-screen">
            <div className="p-12 w-full shadow-md rounded-lg relative">
                <div className="absolute top-4 right-4 flex">
                    <button onClick={togglePhoneList} className={`w-12 h-12 rounded-lg flex items-center justify-center ${showPhoneList ? 'bg-white' : 'bg-transparent'}`}>
                        <Image src='/phone.png' alt={'phone'} width={24} height={24} />
                    </button>
                    <button onClick={toggleWebsiteList} className={`w-12 h-12 rounded-lg flex items-center justify-center ${showWebsiteList ? 'bg-white' : 'bg-transparent'}`}>
                        <Image src='/website.png' alt={'web'} width={24} height={24} />
                    </button>
                </div>
                <div className="mx-4 p-4 rounded-lg">
                    {showPhoneList && (
                        <div>
                            <ul>
                            <ProjectComponent 
                                      imgSrc= '/demo-mob.png'
                                      demoTitle= 'Demo app'
                                      description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
                                />  
                                <ProjectComponent 
                                      imgSrc= '/demo-mob2.png'
                                      demoTitle= 'Arcadia Store'
                                      description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
                                />     
                                
                                <ProjectComponent 
                                      imgSrc= '/demo-mob.png'
                                      demoTitle= 'Demo app'
                                      description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
                                />  
                                <ProjectComponent 
                                      imgSrc= '/demo-mob2.png'
                                      demoTitle= 'Arcadia Store'
                                      description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
                                />    
                            </ul>
                        </div>
                    )}
                </div>
                <div className="mx-4 p-4 rounded-lg">
                    {showWebsiteList && (
                        <div>
                            <ul>
                            <ProjectComponent 
                                      imgSrc= '/demo.png'
                                      demoTitle= 'Demo app'
                                      description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
                                />  
                                <ProjectComponent 
                                      imgSrc= '/demo.png'
                                      demoTitle= 'Arcadia Store'
                                      description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
                                />    
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
