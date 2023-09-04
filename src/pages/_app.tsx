import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import "windi.css";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <script async src="https://umami.skinow.skin/script.js"
      data-website-id="3d8a3706-9a30-4477-9a18-c028c466794d"
      data-do-not-track="true"
      data-domains="nanaicamc.tk"
    ></script>
    <script async src="https://umami.skinow.skin/script.js"
      data-website-id="3d8a3706-9a30-4477-9a18-c028c466794d"
      data-do-not-track="true"
      data-domains="www.nanaicamc.tk"
    ></script>
    <NavBar component={Component} />
    <main className="flex-1">
      <Component {...pageProps} />
    </main>
    {router.route !== "/downloads/all" && <Footer />}
  </>
);

export default MyApp;
