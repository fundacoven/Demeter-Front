import { ReduxProvider } from "@/redux/ReduxProvider";
import "./globals.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">
          <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}