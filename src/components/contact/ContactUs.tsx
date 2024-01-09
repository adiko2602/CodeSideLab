import React from "react";
import PageContent from "../PageContent";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactUsCard from "./ContactUsCard";
import { email, phone } from "@/lib/constants/constants";

export type TContactUsCard = {
  title?: string;
  link?: {
    href: string;
    label: string;
  };
  content: string;
  icon: React.ReactNode;
};

const contactUsCards: TContactUsCard[] = [
  {
    title: "Miejsce",
    content: "Polska, Deutschland, United Kingdom",
    icon: <MapPin />,
  },
  {
    title: "Telefon",
    content: phone,
    link: {
      href: `tel:${phone}`,
      label: "Zadzwoń",
    },
    icon: <Phone />,
  },
  {
    title: "Email",
    content: email,
    link: {
      href: `mailto:${email}`,
      label: "Napisz",
    },
    icon: <Mail />,
  },
];

function ContactUs() {
  return (
    <div
      style={{ backgroundImage: `url(/image/contactbg.jpg)` }}
      className="bg-cover bg-center"
    >
      <PageContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contactUsCards.map((card) => (
            <div className="col-span-1" key={card.content}>
              <ContactUsCard
                title={card.title}
                link={card.link}
                content={card.content}
                icon={card.icon}
              />
            </div>
          ))}
        </div>
      </PageContent>
    </div>
  );
}

export default ContactUs;
