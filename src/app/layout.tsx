import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://sojiki-nakahigashi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "草喰なかひがし｜京都・銀閣寺の四季を映す京料理",
  description:
    "草喰なかひがしは、京都市左京区・銀閣寺近くで旬の山野草や野菜、炭火の肴、かまど炊きのご飯を通して四季を映す京料理店です。住所、営業時間、定休日、予約方法、アクセスをご案内します。",
  alternates: { canonical: "/" },
  verification: { google: "ayHXvvh7MAYyEd0yabm5xYrI98qeN_1bfcLkvUPkbrM" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "草喰なかひがし",
    title: "草喰なかひがし｜京都・銀閣寺の四季を映す京料理",
    description: "銀閣寺近く、自然の恵みと命への感謝を一皿に映す京料理。店舗情報、予約、アクセス、English Guide。",
  },
  twitter: { card: "summary", title: "草喰なかひがし｜京都・銀閣寺の京料理", description: "四季を映す料理、店舗情報、予約、アクセスをご案内します。" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1d2a20" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
