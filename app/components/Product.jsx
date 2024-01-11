import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import React from 'react'

const Product = ({product}) => {
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className='product-card'>
          <img src={urlForImage(product.image && product.image[0])} width={250} height={250} className='product-image' />
          <p className='product-name'>{product.name}</p>
          <p className='product-price'>{product.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
