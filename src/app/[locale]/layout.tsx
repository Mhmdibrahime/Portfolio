import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "ar")) {
    return {};
  }
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = messages.meta;

  return {
    title: {
      default: t.title,
      template: t.titleTemplate,
    },
    description: t.description,
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_EG",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import { DharmaProvider } from "@/components/providers/DharmaProvider";

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <DharmaProvider locale={locale}>
        <div dir={locale === "ar" ? "rtl" : "ltr"} lang={locale} className="min-h-screen">
          {children}
        </div>
      </DharmaProvider>
    </NextIntlClientProvider>
  );
}
