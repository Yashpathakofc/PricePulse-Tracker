"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
const heroImages = [
    { imgUrl: '/assets/images/phone.png', alt: 'smartwatch'},
    { imgUrl: '/assets/images/headphone1.png', alt: 'laptop'},
    { imgUrl: '/assets/images/hero-1.png', alt: 'phone '},
    { imgUrl: '/assets/images/laptop1.png', alt: 'headphone'},
    { imgUrl: '/assets/images/hero-5.png', alt: 'chair'},
  ]
const HeroCarousel = () => {
  return (
    <div className='hero-carousel'>
        <Carousel showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showArrows={false}
        >
            {heroImages.map((image)=>(
                <Image
                src={image.imgUrl}
                alt={image.alt}
                width={484}
                height={484}
                className="object.contain"
                key={image.alt}/>
            ))}
        </Carousel>
        <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className='max-xl:hidden absolute -left-[15%] bottom-0 z-0'
        />
        
</div>
  )
}

export default HeroCarousel