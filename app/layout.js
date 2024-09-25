import "./globals.css";
import AuthWrapper from "./appUtils/context/authContext";
import { ThemeProvider } from "next-themes";
import Sidebar from "./components/dashbord/aside"; // Assuming Sidebar component is in components folder
import Header from "./components/header/header";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "700"], // Choose the font weights you need
  subsets: ["latin"], // Choose the character subsets
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthWrapper>
          <ThemeProvider attribute="class" defaultTheme="light">
            <div className="flex">
              {/* Sidebar will always be rendered */}
              <Header />
              {/* Header(user/guest) will always be rendered */}
              <Sidebar />
              {/* The page-specific content will be rendered here */}
              <main className="flex-grow">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </AuthWrapper>
      </body>
    </html>
  );
}
