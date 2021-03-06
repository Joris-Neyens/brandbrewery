import Head from 'next/head'
import Image from 'next/image'
import header from '../public/header.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Brandbrewery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Brandbrewery" content="Branding, logos and websites" />
      </Head>
      <div className="header">
        <Image
          src={header}
          placeholder="blur"
          className="header__image"
          alt="Norwegian harbor"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="container-fluid header__content">
        <div className="container logo pt-5 ml-5">
          Brand <br />
          Brwry.
        </div>
        <div className="container content-container d-flex align-items-center">
          <div className="row content w-100">
            <div className="col-12">
              <h1>New website coming soon</h1>
            </div>
            <div className="col-12">
              <h2 className="pt-3">Branding og nettsider for andre som drive med det de brenner for.</h2>
              <a href="mailto: info@brandbrewery.no">
                <button className="button__primary px-4 py-2 border-0 mt-4">Kontakt oss</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
