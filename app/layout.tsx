import type { Metadata } from "next";
import { Cascadia_Mono } from 'next/font/google';
import "./globals.css";

const cascadiaMono = Cascadia_Mono({
    subsets: ['latin'],
    variable: '--font-cascadia-mono',
});

export const metadata: Metadata = {
    title: "Terminal Portfolio - Interactive Developer Portfolio",
    description: "An interactive terminal-themed portfolio showcasing my work, skills, and experience",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${cascadiaMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
