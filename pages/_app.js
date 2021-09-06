import "../styles/styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/myt1pll.css"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
