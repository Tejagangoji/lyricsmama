import '@/styles/globals.css';
import { Layout } from '@/src/components/layout';
import { ThemeProvider } from '@/src/components/Themecontext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
         />

        <Script id="google-analytics-script" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname,
          });`}
        </Script>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
