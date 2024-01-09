import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TConfigureCard } from "./Configure";

type TConfigureCardProps = {
  children?: React.ReactNode;
} & TConfigureCard;

function ConfigureCard({ title, content, children }: TConfigureCardProps) {
  return (
    <Card className="rounded-none border-0 shadow-xl min-h-full">
      <CardHeader>
        <CardTitle>
          <div className="flex w-full justify-center p-4">{title}</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {content && content}
        {children && children}
      </CardContent>
    </Card>
  );
}

export default ConfigureCard;
