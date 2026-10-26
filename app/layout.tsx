import './globals.css';
import './overrides.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Moleculab — Interactive Chemical Science Explorer', description: 'Explore chemistry through compounds, reactions, calculators and molecular models.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
