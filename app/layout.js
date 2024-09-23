import "./globals.css";
import AuthWrapper from "./context/authContext";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />
      </head>
      <body>
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
