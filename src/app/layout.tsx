import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

/**
 * @description 為了長時間閱讀與視覺流暢
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * @description 數字易對齊，排版不晃動
 *
 * 適合應用場景：
 * 1. 程式碼區塊
 * 2. 統計數據
 * 3. 表格文字
 */
const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan Tsai",
  description:
    "Ryan Tsai is a front-end engineer who loves new knowledge and challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto_mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
