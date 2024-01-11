import React from 'react';
import { Header, Footer, Home } from './components';
import './globals.css';
import { client } from '@/sanity/lib/client';
import { useStateContext } from './Context/StateContext';


export const getData = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    products,
    bannerData,
    revalidate: 10, // Set the revalidation interval in seconds
  };
};


export default async function Page() {
  const { products, bannerData } = await getData();
 
  
  return (
    <div className='layout'>
      <header>
        <Header/>
      </header>
      <main className='main-container'>
        <Home products={products} bannerData={bannerData} />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

// export async function getServerSideProps() {
//   const { products, bannerData } = await getData();

//   return {
//     props: { products, bannerData },
//   };
// }

// export default Page;
