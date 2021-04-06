import '../styles/globals.css'
import HomepageContextProvider from "../context/HomepageContext";
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <HomepageContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HomepageContextProvider>
  )
}

export default MyApp
