import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Login | by BY",
  description: "Login Page",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="tr" className={kanit.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
