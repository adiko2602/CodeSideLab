import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TContactUsCard } from "./ContactUs";
import Link from "next/link";
import { Button } from "../ui/button";

function ContactUsCard({ title, link, content, icon }: TContactUsCard) {
  return (
    <Card className="rounded-none border-0 shadow-xl min-h-full">
      <CardHeader>
        <div className="flex w-full justify-center p-4">
          <div className="rounded-full bg-gray-200 p-4">
            <div className="w-8 h-8 flex justify-center items-center text-green-600">
              {icon}
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
        <div className="flex w-full justify-center text-center flex-col gap-4">
          <div>{content}</div>
          {link && (
            <div>
              <Link href={link.href}>
                <Button className="bg-green-700 hover:bg-green-600 rounded-none">
                  {link.label}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default ContactUsCard;
