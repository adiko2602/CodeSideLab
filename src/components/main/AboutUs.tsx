import React from "react";
import PageContent from "../PageContent";
import AboutUsCard from "./AboutUsCart";

function AboutUs() {
  return (
    <div>
      <PageContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1 gap-4 flex flex-col justify-center items-center p-8">
            <div className="text-2xl font-semibold text-center">
              Poznaj nas bliżej
            </div>
            <div className="text-center">
              Młodych, utalentowanych i gotowych do kodowania.
            </div>
          </div>
          <div className="col-span-1">
            <AboutUsCard />
          </div>
        </div>
      </PageContent>
    </div>
  );
}

export default AboutUs;
