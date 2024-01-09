import React from "react";
import PageContent from "./PageContent";
import Logo from "./Logo";
import { Facebook, GithubIcon, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { email, facebook, github, phone } from "@/lib/constants/constants";

type TIcon = {
  color: string;
  icon: React.ReactNode;
  href?: string;
};

const icons: TIcon[] = [
  {
    color: "#1877F2",
    icon: <Facebook />,
    href: facebook,
  },
  {
    color: "#c71610",
    icon: <Mail />,
    href: `mailto:${email}`,
  },
  {
    color: "#08851b",
    icon: <Phone />,
    href: `tel:${phone}`,
  },
  {
    color: "#2b3137",
    icon: <GithubIcon />,
    href: github,
  },
];

function Footer() {
  return (
    <div className="bg-stone-600">
      <PageContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-stone-100">
          <div className="col-span-1">
            CodeSide Lab jest przyszłościowym zespołem developerskim, którego
            celem jest zrewolucjonizowanie sposobu, w jaki wytwarzamy i
            korzystamy ze stron internetowych.
          </div>
          <div className="col-span-1 flex lg:justify-center ">
            <Logo />
          </div>
          <div className="col-span-1 flex flex-row gap-4 lg:justify-end">
            {icons.map((icon) => (
              <Link key={icon.color} href={icon.href ?? ""}>
                <div className="p-4" style={{ backgroundColor: icon.color }}>
                  {icon.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </PageContent>
    </div>
  );
}

export default Footer;
