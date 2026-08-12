import dynamic from "next/dynamic";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LoadingScreen from "@/components/layout/LoadingScreen";
import JsonLd from "@/components/seo/JsonLd";

const SelectedWork = dynamic(() => import("@/components/sections/SelectedWork"));
const Engineering = dynamic(() => import("@/components/sections/Engineering"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const About = dynamic(() => import("@/components/sections/About"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <LoadingScreen locale={locale} />
      <JsonLd />
      <Navbar locale={locale} />
      <main id="main-content">
        <Hero locale={locale} />
        <SelectedWork locale={locale} />
        <Engineering locale={locale} />
        <Experience locale={locale} />
        <About locale={locale} />
        <Services locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
