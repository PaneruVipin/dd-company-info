import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyOutLet;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

const EmptyOutLet = ({ children }) => {
  return <>{children}</>;
};
