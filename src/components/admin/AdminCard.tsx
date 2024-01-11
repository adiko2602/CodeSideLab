import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TAdminCard } from "./Admin";
import LinkButton from "../LinkButton";
import Link from "next/link";

function AdminCard({ title, description, href }: TAdminCard) {
  return (
    <Card className="rounded-none border-0 shadow-xl min-h-full">
      <CardHeader>
        <CardTitle>
          <div className="flex w-full justify-center p-4">{title}</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {description}
          <div className="flex justify-center">
            <Link href={href}>
              <LinkButton>Przejdź</LinkButton>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default AdminCard;
