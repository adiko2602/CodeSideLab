import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TOpinionCard } from "./Opinion";

function OpinionCard({ name, opinion }: TOpinionCard) {
  return (
    <Card className="rounded-none border-0 shadow-xl min-h-full">
      <CardHeader>
        <CardTitle>
          <div className="flex w-full justify-center p-4">
            {name.charAt(name.length - 1).toLowerCase() === "a"
              ? "Pani"
              : "Pan"}{" "}
            {name}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-col justify-center italic text-center">
          "{opinion}"
        </div>
      </CardContent>
    </Card>
  );
}

export default OpinionCard;
