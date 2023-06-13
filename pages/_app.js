import '@/styles/globals.css';
import { Layout } from '@/src/components/layout';
import { ThemeProvider } from '@/src/components/Themecontext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
