import Header from "@/components/header";
import Navbar from "../navbar";
const AppLayout = ({ children }) => {
  return (
    <div className="flex-1">
      <div className="sticky   top-0 inset-x-0 bg-[#636b72] shadow-2xl  shadow-[#2f4051]">
        <Header />
        <Navbar />
      </div>
      {children}
    </div>
  );
};
export default AppLayout;
