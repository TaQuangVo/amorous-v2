import '../styles/globals.css'

//components
import Layout from "../components/Layout"

//contexts
import HomepageContextProvider from "../context/HomepageContext";
import LanguageContextProvider from "../context/LanguageContext";
import OderContextProvider from "../context/OderContext";


function MyApp({ Component, pageProps }) {
  return (
    <OderContextProvider>
    <LanguageContextProvider>
    <HomepageContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HomepageContextProvider>
    </LanguageContextProvider>
    </OderContextProvider>
  )
}

export default MyApp
