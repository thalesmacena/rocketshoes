import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import { CartProvider } from '../contexts/CartContext';
import { ThemeProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
