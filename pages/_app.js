import "../styles/globals.css";
import Footer from "../components/Footer";
import { useRouter } from 'next/router';
import Navbar from "../components/Navbar";


const MyApp = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  return (
    <>
      {pathname !== '/video/Play' && <Navbar />}
      <Component {...pageProps}/>
      {pathname !== '/video/Play' && <Footer/> }
    </>
  );
};

export default MyApp;
