import React from 'react'
import Head from 'next/head'

import Header from '@components/Header.component'
import styles from '@styles/Home.module.css'

const Base: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  </div>
)

export default Base
