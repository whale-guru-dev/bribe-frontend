import {Web3ReactProvider} from "@web3-react/core";
import {getLibrary} from "connectors";
import type {AppProps} from "next/app";
import {Provider as ReduxProvider} from "react-redux";
import {QueryClientProvider, QueryClient} from "react-query";
import {store} from "slices";
import Layout from "./_layout";
import "tailwindcss/tailwind.css";
import "../styles/global.css";

const queryClient = new QueryClient();

function MyApp({Component, pageProps}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Web3ReactProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
