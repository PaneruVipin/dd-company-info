import Header from "@/components/header";
import Navbar from "../navbar";
import Footer from "../footer";
const AppLayout = ({ children }) => {
  return (
    <div className="flex-1">
      <div className="sticky z-10  bg-[#4e8a94] top-0 inset-x-0 max-w-[100vw]">
        <Header />
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};
export default AppLayout;
