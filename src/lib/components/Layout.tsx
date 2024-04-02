import { ReactNode } from 'react';
import { Container } from '@mui/material';
import Image from 'next/image';
import LogoImage from '../../../public/images/logo.svg';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex min-h-screen flex-col bg-background-light'>
            <Container>
                <Image
                    className='my-4 h-auto w-2/3 min-w-64 max-w-xl md:w-1/2 lg:w-1/3'
                    alt='stack overflow tags logo'
                    priority
                    src={LogoImage}
                />
                {children}
            </Container>
        </div>
    );
};
