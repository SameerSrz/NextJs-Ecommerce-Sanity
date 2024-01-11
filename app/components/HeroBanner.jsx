import Link from 'next/link'
import React  from 'react'
import { urlForImage } from '@/sanity/lib/image'


const HeroBanner = ({bannerData}) => {
  
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{bannerData.smallText}</p>
        <h3>{bannerData.midText}</h3>
        <h1>{bannerData.largeText1}</h1>
        <img src={urlForImage(bannerData.image)} alt='Headphones' className='hero-banner-image' />
        <div>
          <Link href={`/product/${bannerData.slug?.current}`}>
            <button type='button'>{bannerData.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{bannerData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
