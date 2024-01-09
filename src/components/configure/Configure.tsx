import React from "react";
import PageContent from "../PageContent";
import Configurator from "./Configurator";
import Summator from "./Summator";
import ConfigureCard from "./ConfigureCard";

export type TConfigureCard = {
  title: string;
  content?: React.ReactNode;
};

function Configure() {
  return (
    <PageContent>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="col-span-1 flex flex-col gap-4">
          <ConfigureCard title="Skonfiguruj swoją stronę internetową.">
            <Configurator />
          </ConfigureCard>
        </div>
        <div className="col-span-1">
          <ConfigureCard title="Podsumowanie twojej konfiguracji.">
            <Summator />
          </ConfigureCard>
        </div>
      </div>
    </PageContent>
  );
}

export default Configure;
