import { useEffect } from 'react';
import { useRouter } from 'next/router';
import "@/styles/globals.css";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Provider } from "react-redux";
import store from "@/store/store";
import { Analytics } from '@vercel/analytics/react'; // Import the Vercel Analytics component
import { SpeedInsights } from "@vercel/speed-insights/next"
import ReactGA from 'react-ga';

const TRACKING_ID = "G-55XQR96D6L"; // 用您的Google Analytics跟踪ID替换

export default function App({ Component, pageProps }) {

    const router = useRouter();

    useEffect(() => {
        ReactGA.initialize(TRACKING_ID);
        const handleRouteChange = (url) => {
            ReactGA.pageview(url);
        };
        // 跟踪初始页面加载
        handleRouteChange(window.location.pathname);

        // 跟踪后续的路由更改
        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Head>
                <title>Wristo</title>
                <meta
                    name="description"
                    content="Wristo is a platform for creating and sharing watch faces for Garmin watches."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Provider store={store}>
                <Header />
                <div className="pb-[10px]"> {/* Added padding to prevent content from being hidden behind fixed footer */}
                    <Component {...pageProps} />
                </div>
                <Footer />
                <Analytics />  {/*Vercel Analytics : This will automatically track page views*/}
                <SpeedInsights /> {/*This will automatically track LCP */}
            </Provider>
        </>
    );
}
