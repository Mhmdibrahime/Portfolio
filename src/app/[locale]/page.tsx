import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Engineering from "@/components/sections/Engineering";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import LoadingScreen from "@/components/layout/LoadingScreen";
import JsonLd from "@/components/seo/JsonLd";

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
