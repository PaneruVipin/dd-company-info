import AppLayout from "@/components/layouts/appLayout";
import About from "@/components/scrollingPages/about";
import Ecosystem from "@/components/scrollingPages/ecosystem";
import Impact from "@/components/scrollingPages/impact";
import Introduction from "@/components/scrollingPages/introduction";
import InvestorInfo from "@/components/scrollingPages/investorInfo";
import Mission from "@/components/scrollingPages/mission";
import Team from "@/components/scrollingPages/team";

export default function Home() {
  return (
    <main className={`min-h-screen font-semibold text-[#f4f4f4] `}>
      <section id="introduction">
        <Introduction />
      </section>
      <div className="min-h-screen ">
        <section id="about" className="pt-20 py-[3%] px-[4%]">
          <About />
        </section>
        <section id="mission" className="pt-20 py-[3%] px-[4%]">
          <Mission />
        </section>
        <section id="ecosystem" className="pt-20 py-[3%] px-[4%]">
          <Ecosystem />
        </section>
        <section id="impact" className="pt-20 bg-white py-[3%] px-[4%]">
          <Impact />
        </section>
        <section id="team" className="pt-20 py-[3%] px-[4%]">
          <Team />
        </section>
        <section id="investor_info" className="pt-20 py-[3%] px-[4%]">
          <InvestorInfo />
        </section>
      </div>
    </main>
  );
}

Home.Layout = AppLayout;
