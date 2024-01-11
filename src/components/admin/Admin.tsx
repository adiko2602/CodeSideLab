import React from "react";
import PageContent from "../PageContent";
import AdminCard from "./AdminCard";

export type TAdminCard = {
  title: string;
  description: string;
  href: string;
};

const adminCards: TAdminCard[] = [
  {
    title: "Użytkownicy",
    description:
      "Zarządzaj użytkownikami, dodawaj nowych, usuwaj starych, a nawet edytuj obecnych",
    href: "/admin/user",
  },
  {
    title: "Zlecenia",
    description: "Przeglądaj zlecenia wysłane przez formularz na stronie",
    href: "/admin/order",
  },
];

function Admin() {
  return (
    <PageContent>
      <div className="text-lg font-semibold">Admin Panel</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {adminCards.map((card) => (
          <AdminCard
            key={card.title}
            description={card.description}
            href={card.href}
            title={card.title}
          />
        ))}
      </div>
    </PageContent>
  );
}

export default Admin;
