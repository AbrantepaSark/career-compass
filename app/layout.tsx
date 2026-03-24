import { Geist, Geist_Mono } from "next/font/google"
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import "./globals.css"
//import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        fontSans.variable
      )}
    >
      <body>
        <ClerkProvider>
          <Show when="signed-in">
            <header className="flex h-20 items-center justify-end gap-4 bg-background p-4 drop-shadow-md">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: {
                      height: "h-8 w-8",
                    },
                  },
                }}
              />
            </header>
          </Show>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
