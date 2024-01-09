"use client";
import PageContent from "../PageContent";
import useBrakepoint from "@/lib/hooks/useBrakepoint";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import OpinionCard from "./OpinionCard";

export type TOpinionCard = {
  name: string;
  opinion: string;
};

const opinionCards: TOpinionCard[] = [
  {
    name: "Aneta",
    opinion:
      "Jestem zadowlona ze stworzenia dla mnie strony, ale także optymalizacji pod kątem SEO. Dzięki ich pracy widzę znaczący wzrost w ruchu na mojej stronie. Naprawdę znają się na rzeczy i potrafią wyróżnić firmę w sieci.",
  },
  {
    name: "Damian",
    opinion:
      "Profesjonalne podejście do klienta, szybka realizacja strony oraz przemiła obsługa telefoniczna, jestem zadowolony ze strony internetowej, bardzo dziękuje i polecam.",
  },
  {
    name: "Robert",
    opinion:
      "Miałem okazję skorzystać z usług Codesidelab przy tworzeniu skomplikowanej aplikacji internetowej. Profesjonalizm, szybkość reakcji na potrzeby klienta i perfekcyjne dopracowanie każdego detalu. Warte każdej wydanej złotówki a wiele ich wydać nie trzeba.",
  },
];

function Helper() {
  return (
    <div className="col-span-1 gap-4 flex flex-col justify-center items-center p-8">
      <div className="text-2xl font-semibold text-center">Opinie o nas</div>
      <div className="text-center">
        Przeczytaj opinie zadowolonych klientów.
      </div>
      <Button className="bg-green-700 hover:bg-green-600 rounded-none">
        Napisz opinię
      </Button>
    </div>
  );
}

function Opinion() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const { brakepointVal, brakepointValues } = useBrakepoint();
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="bg-gray-200">
      <PageContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {brakepointVal < brakepointValues["lg"] && <Helper />}
          <div className="col-span-1">
            <Carousel
              setApi={setApi}
              className="w-full max-w-full"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {opinionCards.map((card) => (
                  <CarouselItem className="sm:basis-1/2" key={card.opinion}>
                    <OpinionCard name={card.name} opinion={card.opinion} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="py-4 flex justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <div
                  key={index}
                  className={
                    current === index + 1
                      ? "bg-stone-400 p-1 rounded-full"
                      : "bg-stone-300 p-1 rounded-full"
                  }
                ></div>
              ))}
            </div>
          </div>
          {brakepointVal >= brakepointValues["lg"] && <Helper />}
        </div>
      </PageContent>
    </div>
  );
}

export default Opinion;
