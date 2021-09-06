import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="Brandbrewery" content="Branding, logos and websites" />
      </Head>
      <div className="header">
        <Image src="/header.jpg" className="header__image" alt="Norwegian harbor" layout="fill" objectFit="cover" priority blur={true} />
      </div>
      <div className="container header__content d-flex">
        <div className="row w-100">
          <div className="col-12">
            <h1>
              New website comming <br /> November 2021
            </h1>
          </div>
          <div className="col-12">
            <h2 className="pt-2">Branding og nettsider for andre som drive med det de brenner for.</h2>
            <p className="pt-3">Hjelp med grafsik og/ eller webdesign? kontakt oss.</p>
          </div>
        </div>
      </div>
    </>
  );
}
