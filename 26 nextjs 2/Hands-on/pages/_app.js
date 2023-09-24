import '../styles/globals.css'
import Layout from "../components/layout/Layout"

//componenet is the page and pageprops is props recievef by componenents
//this componenent is root componenent renedered by next js
function MyApp({ Component, pageProps }) {
  //layout componenent applied to every page
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
