import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyOutLet;
  return (
    <div className="bg-[rgb(214,219,220)] ">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

const EmptyOutLet = ({ children }) => {
  return <>{children}</>;
};
