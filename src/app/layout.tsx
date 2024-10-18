import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/navigation";

const faktumRegular = localFont({
	src: "./fonts/Faktum_Regular.otf",
	variable: "--font-faktum-regular",
	weight: "100 900",
});
const faktumBold = localFont({
	src: "./fonts/Faktum_Bold.otf",
	variable: "--font-faktum-bold",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${faktumRegular.variable} ${faktumBold.variable} antialiased`}
			>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
