import Configurator from "@/components/configure/Configurator";
import PageContent from "@/components/PageContent";
import Summator from "@/components/configure/Summator";
import AboutUs from "@/components/home/AboutUs";
import MeetUs from "@/components/home/MeetUs";
import Opinion from "@/components/home/Opinion";
import OurOffer from "@/components/home/OurOffer";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <>
      <MeetUs />
      <OurOffer />
      <AboutUs />
      <Opinion />
      <WhyUs />
    </>
  );
}
