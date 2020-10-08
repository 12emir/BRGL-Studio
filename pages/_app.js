import App from "next/app";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "@/Layout.js";
import { appWithTranslation } from "../i18n";

import "../styles.css";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <Layout>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </>
  );
};
MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
