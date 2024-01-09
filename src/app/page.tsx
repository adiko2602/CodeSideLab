import Configurator from "@/components/Configurator";
import PageContent from "@/components/PageContent";
import Summator from "@/components/Summator";
import AboutUs from "@/components/main/AboutUs";
import MeetUs from "@/components/main/MeetUs";
import OurOffer from "@/components/main/OurOffer";

export default function Home() {
  return (
    <>
      <MeetUs />
      <OurOffer />
      <AboutUs />
      <PageContent>
        <div></div>
        {/* <main className="grid grid-cols-1 md:grid-cols-4 p-2 gap-2">
        <div className="col-span-1">
          <Configurator />
        </div>
        <div className="col-span-2">
          <div className="flex justify-center">Center of the page</div>
        </div>
        <div className="col-span-1">
          <Summator />
        </div>
      </main> */}
      </PageContent>
    </>
  );
}
