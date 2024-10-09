import type { Metadata } from "next";
import "./globals.css";
import DontRightClick from "./components/config/DontRightClick";
import WebHeader from "./components/ui/WebHeader";
import WebFooter from "./components/ui/WebFooter";

// ข้อมูล metadata ที่จะใช้งานได้เฉพาะฝั่งเซิร์ฟเวอร์
export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "growgrass ขายหญ้าเทียม",
  description: "หญ้าเทียมราคาถูกคุณภาพดี ต้องที่นี่growgrass",
};

// การตั้งค่า viewport
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1,
  userScalable: "no", // เทียบเท่ากับ user-scalable=0
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DontRightClick>
        <body className="antialiased no-select no-tap-highlight">
          <WebHeader />
          {children}
          <WebFooter />
        </body>
      </DontRightClick>
    </html>
  );
}
