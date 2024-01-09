import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TWhyUsCard } from "./WhyUs";

function WhyUsCard({ title, content }: TWhyUsCard) {
  return (
    <Card className="rounded-none border-0 shadow-xl">
      <CardHeader>
        <CardTitle>
          <div className="flex w-full justify-center p-4">{title}</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-col justify-center italic text-center text-green-600">
          {content}
        </div>
      </CardContent>
    </Card>
  );
}

export default WhyUsCard;
