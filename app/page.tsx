import HeroCarousel from '@/components/HeroCarousel'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'
import React from 'react'
import { getAllProducts } from '@/lib/actions'
import ProductCard from '@/components/ProductCard'
const Home =async () => {
  const allProducts=await getAllProducts();
  return (
    <>
    <section className="px-6 md:px-20 py-24">
      <div className="flex max-xl:flaz-col gap-16">
        <div className='flex flex-col justify-center'>
          <p className="small-text text-brown">
            An AI enabled shopping solution:
            <Image
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16}
            />
          </p>
          <h1 className='head-text'>
            Unleash the power of <span className='text-brown'>PricePulse :)</span>
          </h1>
          <p className="mt-5">
          Stay ahead with real-time e-commerce price tracking and unbeatable savings!
          </p>
          <SearchBar/>
        </div>
        <HeroCarousel/>
      </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending<span className="text-brown"> Now:</span></h2>
        <div className='flex flex-wrap gap-x-6 gap-y-12'>
          {allProducts.map((product)=>
              <ProductCard key={product._id} product={product}/>
          )}
        </div>
      </section>
    </>
  )
}
export default Home