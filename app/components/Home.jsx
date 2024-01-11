import React from 'react'
import { FooterBanner, HeroBanner, Product } from '.'

const Home = ({ products, bannerData }) => {
  
  return (
    <div>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>Best Seller Products</h2>
        <p>speakers there are many variation passages</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export default Home
