import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import React from 'react'

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.largeText2}</h3>
          <p>{footerBanner.saleTime}</p>
        </div>
        <div className='right'>
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.slug?.current}`}>
            <button type='button'>{footerBanner.buttonText}</button>
          </Link>
        </div>
        <img src={urlForImage(footerBanner.image)}
          className='footer-banner-image'
          />
      </div>
    </div>
  )
}

export default FooterBanner
