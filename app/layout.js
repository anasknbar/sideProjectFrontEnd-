import "./globals.css";
import AuthWrapper from "./context/authContext";
import { ThemeProvider } from "next-themes";
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['400', '700'], // Choose the font weights you need
  subsets: ['latin'],     // Choose the character subsets
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={roboto.className}>
        <AuthWrapper>
          <ThemeProvider attribute="class" defaultTheme="light">
          <main>{children}</main>{" "}
          </ThemeProvider>
        </AuthWrapper>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
