import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

import { MaterialProvider } from '@/lib/utils/providers/MaterialProvider';

export const metadata: Metadata = {
    title: 'Stack Overflow Tags',
    description: 'Created by @majkizbajki'
};

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700']
});

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <MaterialProvider>
                <body className={roboto.className}>{children}</body>
            </MaterialProvider>
        </html>
    );
}
