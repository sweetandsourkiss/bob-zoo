import Layout from "@/components/Layout";
import { prefix } from "@/config/config";
import "@/styles/globals.css";

export default function Bobzoo({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} url={prefix} />
    </Layout>
  );
}
