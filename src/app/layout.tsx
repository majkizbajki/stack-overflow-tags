import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

import { MaterialProvider } from '@/lib/utils/providers/MaterialProvider';
import { ReactQueryProvider } from '@/lib/utils/providers/ReactQueryProvider';

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
            <body suppressHydrationWarning className={roboto.className}>
                <ReactQueryProvider>
                    <MaterialProvider>{children}</MaterialProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
