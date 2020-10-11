import App from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "@/Layout.js";
import { appWithTranslation } from "../i18n";
import { ThemeProvider } from "@/ThemeContext.js";
import "../style/styles.scss";
import "../style/hamburger.scss";
import "../style/portfolio.scss";

import "../morph.css";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <ThemeProvider>
        <Layout>
          <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </>
  );
};
MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});
export default appWithTranslation(MyApp);
