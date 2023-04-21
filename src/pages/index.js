import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import ProductsContextProvider from '@/context/ProductsContext'
import HeroSection from '@/components/HeroSection'
import MainSection from '@/components/MainSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ProductsContextProvider>
      <HeroSection />
      <MainSection />
    </ProductsContextProvider>
  )
}
