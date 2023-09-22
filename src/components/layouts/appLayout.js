import Header from "@/components/header";
import Navbar from "../navbar";
import Footer from "../footer";
const AppLayout = ({ children }) => {
  return (
    <div className="flex-1">
      <div className="sticky z-10  bg-[#23d5d7] top-0 inset-x-0 ">
        <Header />
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};
export default AppLayout;
