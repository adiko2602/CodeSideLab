import React from "react";
import PageContent from "../PageContent";
import WhyUsCard from "./WhyUsCard";

export type TWhyUsCard = {
  title: string;
  content: string;
};

const whyUsCards: TWhyUsCard[] = [
  {
    title: "Potrzebujesz profesjonalnej strony internetowej?",
    content:
      "CodeSide Lab to doświadczona firma, specjalizująca się w projektowaniu indywidualnych stron internetowych dostosowanych do Twoich potrzeb. Z nami otrzymasz nie tylko atrakcyjny design, ale również niskie ceny i szybką realizację projektu.",
  },
  {
    title: "Dlaczego warto z nami współpracować?",
    content:
      "Indywidualne podejście: Każda strona jest dostosowana do Twoich oczekiwań. Niskie ceny: Oferujemy konkurencyjne stawki, bez ukrytych kosztów. Szybka realizacja: Twój projekt gotowy w ciągu dwóch tygodni, a jeśli nie, zwrot pieniędzy gwarantowany.",
  },
];

function WhyUs() {
  return (
    <div>
      <PageContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {whyUsCards.map((card) => (
            <WhyUsCard
              key={card.title}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </PageContent>
    </div>
  );
}

export default WhyUs;
