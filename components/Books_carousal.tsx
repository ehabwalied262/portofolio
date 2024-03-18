'use client'
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { Book, booksData } from './Books_data';
import Image from 'next/image';


const BooksCarousel: React.FC = () => {
    const [carouselBooks, setCarouselBooks] = useState<Book[]>([]);

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        setCarouselBooks(booksData.slice(0, 9));
    }, []);

    const bookTemplate = (book: Book) => {
        return (
            <div className="px-4 sm:px-12"> {/* Adjust padding for mobile screens */}
                <div className="flex flex-col sm:flex-row gap-4"> {/* Adjust layout for mobile screens */}
                    <Image src={`${book.image}`} alt={book.name} height={320} width={180} />
                    <div className='flex flex-col gap-4'>
                        <h4 className="text-lg font-bold mt-6">{book.name}</h4>
                        <p className="">{book.description}</p>
                        <div className='bg-green-300 min-w-[50px] rounded-md text-sm font-semibold py-1 px-4'>{book.category}</div>
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card pt-96 mt-96">
        <div className='mb-6'>Books I read : </div>

            <Carousel 
                value={carouselBooks} 
                numVisible={1} 
                numScroll={1} 
                responsiveOptions={responsiveOptions}
                autoplayInterval={3000} 
                itemTemplate={bookTemplate}
                />
        </div>
    );
}

export default BooksCarousel;