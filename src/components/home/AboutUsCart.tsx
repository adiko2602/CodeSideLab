import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Logo from "../Logo";

function AboutUsCard() {
  return (
    <Card className="rounded-none border-0 shadow-xl">
      <CardHeader>
        <CardTitle>
          <div className="flex w-full justify-center p-4">
            <Logo />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex w-full flex-col justify-center italic text-center">
            Jesteśmy pasjonatami programistyki typu front-end, którą to
            wykorzystujemy w dokładnym i estetycznym pisaniu stron
            internetowych. Nasze projekty zawsze są dopracowane i finalizowane w
            jak najszybszym czasie co powoduje dobre opinie ze strony klientów.
            Razem stworzymy stronę, która wyróżni Twoją firmę w internecie!
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default AboutUsCard;
