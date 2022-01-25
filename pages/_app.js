import '../styles/globals.css'
import {useEffect, useMemo} from "react"
import { getAnalytics } from "firebase/analytics";
import { app } from '../util/firebase';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

//import {AnimatePresence} from "framer-motion"

//components
import Layout from "../components/Layout"

//contexts
import HomepageContextProvider from "../context/HomepageContext";
import LanguageContextProvider from "../context/LanguageContext";
import OderContextProvider from "../context/OderContext";
import AuthContextProvider from "../context/AuthContext";


function MyApp({ Component, pageProps ,router }) {

  const stripePk = "pk_test_lcbWDSG0RW52kYBPbqG5SVYT00iZ4NBwwE"

  const stripePromise = useMemo(
    () => loadStripe(stripePk),
    [],
  )

  useEffect(async() => {
      getAnalytics(app)
  }, []);

  return (
    <AuthContextProvider>
    <Elements stripe={stripePromise}>
    <OderContextProvider>
    <LanguageContextProvider>
    <HomepageContextProvider>
    <Layout>
      {/*<AnimatePresence exitBeforeEnter initial={false}>*/}
      <Component {...pageProps } key={router.route}/>
      {/*</AnimatePresence>*/}
    </Layout>
    </HomepageContextProvider>
    </LanguageContextProvider>
    </OderContextProvider>
    </Elements>
    </AuthContextProvider>
  )
}

export default MyApp
