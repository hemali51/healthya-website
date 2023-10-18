import Layout from "@/component/common/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="mainbody">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
