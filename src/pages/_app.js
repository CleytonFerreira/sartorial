import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Layout from '@/components/shared/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  )

}
