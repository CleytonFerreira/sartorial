import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Layout from '@/components/shared/Layout'
import ProductsContextProvider from '@/context/ProductsContext'


export default function App({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </ProductsContextProvider>
  )
}
