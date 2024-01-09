import React from "react";
import PageContent from "../PageContent";
import { Button } from "../ui/button";
import MeetUsCard from "./MeetUsCard";

export type TMeetUsCard = {
  image: string;
  title: string;
  description: string;
};

const meetUsCards: TMeetUsCard[] = [
  {
    image: "",
    title: "STRATEGIE",
    description:
      "Mamy swoją strategię, do której podchodzimy z profesjonalizmem, aby strony działały poprawnie.",
  },
  {
    image: "",
    title: "DESIGN",
    description: "Tworzymy również projekty stron internetowych dla klientów. ",
  },
  {
    image: "",
    title: "DEVELOPERZY",
    description:
      "Pasjonaci programistyki, którzy z przyjemnością tworzą projekty dla klientów.",
  },
  {
    image: "",
    title: "DDOS",
    description:
      "Zabezpieczamy strony przed atakami DDOS by serwery hostingu, na którym stoi strona mogły swobodnie działać.",
  },
];

function MeetUs() {
  return (
    <div
      style={{ backgroundImage: `url(/image/meetusbg.jpg)` }}
      className="bg-cover bg-center"
    >
      <PageContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1 gap-4 flex flex-col justify-center items-center p-8 mt-8 lg:mt-0 bg-white lg:bg-transparent shadow-xl lg:shadow-none">
            <div className="text-2xl font-semibold text-center">
              Poznaj nas, naszą pracę oraz nasze projekty!
            </div>
            <div className="flex gap-4">
              <Button className="bg-green-700 hover:bg-green-600 rounded-none">
                Zadzwoń
              </Button>
              <Button className="bg-green-700 hover:bg-green-600 rounded-none">
                Skonfiguruj
              </Button>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {meetUsCards.map((card) => (
                <MeetUsCard
                  key={card.title}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </PageContent>
    </div>
  );
}

export default MeetUs;
