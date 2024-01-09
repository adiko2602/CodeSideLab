import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Providers from "@/lib/providers/Providers";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "CodeSideLab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl-PL">
      <body className={lato.className}>
        <Providers>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
