import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TOurOfferCard } from "./OurOffer";

function OurOfferCard({ title, options }: TOurOfferCard) {
  return (
    <Card className="rounded-none border-0 shadow-xl">
      <CardHeader>
        <CardTitle>
          <div className="flex w-full justify-center p-4">{title}</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-col justify-center italic text-center">
          {options.map((option) => (
            <div key={option}>{option}</div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default OurOfferCard;
