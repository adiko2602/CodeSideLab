"use client";

import React from "react";
import PageContent from "../PageContent";
import OurOfferCard from "./OurOfferCard";
import useBrakepoint from "@/lib/hooks/useBrakepoint";
import { Button } from "../ui/button";

export type TOurOfferCard = {
  title: string;
  options: string[];
};

const ourOfferCards: TOurOfferCard[] = [
  {
    title: "Front-End",
    options: [
      "Strona internetowa",
      "Projektowanie strony internetowej",
      "Blog",
      "Sklep internetowy",
      "Wersja językowa",
      "Pomoc techniczna strony",
    ],
  },
  {
    title: "Marketing",
    options: [
      "Hosting, domena, certyfikat SSL",
      "Pozycjonowanie",
      "Tracking",
      "Zabezpieczenia DDOS",
    ],
  },
];

function OurOffer() {
  const { brakepointVal, brakepointValues } = useBrakepoint();
  return (
    <div className="bg-gray-200">
      <PageContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {brakepointVal < brakepointValues["lg"] && (
            <div className="col-span-1 gap-4 flex flex-col justify-center items-center p-8">
              <div className="text-2xl font-semibold text-center">
                Nasza Oferta
              </div>
              <div className="text-center">
                Oferujemy konkurencyjne stawki, bez ukrytych kosztów.
              </div>
              <Button className="bg-green-700 hover:bg-green-600 rounded-xl">
                Skonfiguruj stronę dla siebie
              </Button>
            </div>
          )}
          <div className="col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {ourOfferCards.map((card) => (
                <OurOfferCard
                  key={card.title}
                  title={card.title}
                  options={card.options}
                />
              ))}
            </div>
          </div>
          {brakepointVal >= brakepointValues["lg"] && (
            <div className="col-span-1 gap-4 flex flex-col justify-center items-center p-8 mt-8 lg:mt-0 ">
              <div className="text-2xl font-semibold text-center">
                Nasza Oferta
              </div>
              <div className="text-center">
                Oferujemy konkurencyjne stawki, bez ukrytych kosztów.
              </div>
              <Button className="bg-green-700 hover:bg-green-600 rounded-xl">
                Skonfiguruj stronę dla siebie
              </Button>
            </div>
          )}
        </div>
      </PageContent>
    </div>
  );
}

export default OurOffer;
