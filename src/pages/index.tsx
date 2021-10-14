import React from 'react'
import Head from 'next/head'

import ProjetoLogo from '../assets/NewTux.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
          <ProjetoLogo />
       <h1>Hello World 2!</h1>
      </main>

    </div>
  )
}

export default Home
