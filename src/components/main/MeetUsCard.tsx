import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TMeetUsCard } from "./MeetUs";

function MeetUsCard({ image, title, description }: TMeetUsCard) {
  return (
    <Card className="rounded-none border-0 shadow-xl">
      <CardHeader>
        <div className="flex w-full justify-center p-4">
          <div className="rounded-full bg-gray-200 p-4">
            <div className="w-8 h-8 flex justify-center items-center text-green-600">
              A
            </div>
          </div>
        </div>
        <CardTitle>
          <div className="flex w-full justify-center p-4 text-green-600">
            {title}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full justify-center italic text-center">
          {description}
        </div>
      </CardContent>
    </Card>
  );
}

export default MeetUsCard;
