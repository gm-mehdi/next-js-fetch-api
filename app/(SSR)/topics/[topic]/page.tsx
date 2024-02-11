import { UnsplashImage } from '@/models/unsplash-image';
import React from 'react'
import Image from 'next/image';


const page = async ({ params }: { params: { topic: string } }) => {
    const topic = params.topic;
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    const images: UnsplashImage[] = await response.json();

    return (
        <div className='text-center text-4xl'>
            <h1>{topic}</h1>
            <div className='grid grid-cols-5'>
                {
                    images.map(image => (
                        <div key={image.id}>
                            <Image
                                src={image.urls.raw}
                                width={250}
                                height={250}
                                alt={image.description}
                                key={image.urls.raw}
                                className="object-cover m-1 rounded"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page