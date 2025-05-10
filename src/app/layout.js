import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthInitializer from "@/components/globalfiles/setupfiles/authInitializer";
import NavigationBar from "@/components/globalfiles/uifiles/Navbar";
import StoreProvider from "@/components/globalfiles/setupfiles/storeprovider";
import Snackbar from "@/components/globalfiles/uifiles/Snackbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Task Manager",
  description: "This Task Management App allows users to efficiently manage their tasks by providing functionalities to create, edit, and delete tasks. Users can assign a priority level—High, Medium, or Low—to each task, and the tasks are automatically sorted based on their priority. Each priority is visually represented using colored badges for better clarity. The app features a tab-based layout that separates the task creation form and the task list for smooth navigation. It also includes a snackbar notification system to give users instant feedback on their actions. The global state of the app is managed using Redux Toolkit, and it is structured to support API integration using RTK Query and protected routes via middleware-based authentication, making the app scalable and ready for real-world usage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <AuthInitializer />
          <NavigationBar/>
          {children}
           <Snackbar />
        </StoreProvider>
      </body>
    </html>
  );
}
