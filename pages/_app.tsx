import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MainLayout } from '../src/components/layout/main-layout';
import Image from 'next/image';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
