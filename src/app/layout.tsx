import "@/styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { UserNav } from "@/components/user-nav";
import { cn } from "@/lib/utils";
import { ModeNav } from "@/components/mode-nav";

export default async function LocaleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased"
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex h-16 items-center mx-2">
                        <UserNav />
                        <div className="ml-auto flex items-center space-x-4">
                            <ModeNav />
                        </div>
                    </div>
                    <nav></nav>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
