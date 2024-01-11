import { Inter } from 'next/font/google'
import './globals.css'
import { StateContext } from './Context/StateContext'
import { Toaster } from 'react-hot-toast'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <StateContext>
            <Toaster/>
                {children}
          </StateContext>
        </body>
      </html>
  )
}