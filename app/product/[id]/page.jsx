import { Footer, Header } from '@/app/components'
import ProductDetail from '@/app/components/ProductDetail'
import React from 'react'
import { client } from '@/sanity/lib/client';

const productDetailPage = async(params) => {
  const { params: { id } } = params;
  const query = `*[_type == "product" && slug.current == '${id}'][0]`;
  const productsQuery = '*[_type == "product"]'
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery) 
  
  return (
    <div className='layout'>
      <header>
        <Header/>
      </header>
      <main className='main-container'>
        <ProductDetail id={id} product={product} products={products} />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default productDetailPage
