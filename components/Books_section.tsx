import React from 'react';
import BooksCarousel from './Books_carousal';

export default function BooksSection() {
    return (
        <div className="flex justify-center items-start px-8 h-screen w-screen">
            <div className="p-12 w-full shadow-md rounded-lg relative">
                <BooksCarousel />
            </div>
        </div>
    );
}