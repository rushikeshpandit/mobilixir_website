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
const generalSansBold = localFont({
	src: "./fonts/GeneralSans-Bold.otf",
	variable: "--font-generalsans-bold",
	weight: "100 900",
});
const generalSansLight = localFont({
	src: "./fonts/GeneralSans-Light.otf",
	variable: "--font-generalsans-light",
	weight: "100 900",
});
const generalSansMedium = localFont({
	src: "./fonts/GeneralSans-Medium.otf",
	variable: "--font-generalsans-medium",
	weight: "100 900",
});
const generalSansRegular = localFont({
	src: "./fonts/GeneralSans-Regular.otf",
	variable: "--font-generalsans-regular",
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
				className={`bg-white ${faktumRegular.variable} ${faktumBold.variable} ${generalSansBold.variable} ${generalSansLight.variable} ${generalSansMedium.variable} ${generalSansRegular.variable} antialiased`}
			>
				<Navigation />
				<div
					id="home"
					className="min-h-screen flex flex-col w-auto bg-white"
				>
					{children}
				</div>
			</body>
		</html>
	);
}
