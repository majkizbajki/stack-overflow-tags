import { Container } from '@mui/material';
import Image from 'next/image';

import { Table } from '@/lib/components/table/Table';
import LogoImage from '@/public/images/logo.svg';

export default function Home() {
    return (
        <div className='flex min-h-screen flex-col bg-background-light'>
            <Container>
                <Image
                    className='my-4 h-auto w-2/3 min-w-64 max-w-xl md:w-1/2 lg:w-1/3'
                    alt='stack overflow tags logo'
                    priority
                    src={LogoImage}
                />
                <Table
                    ariaLabel='tagTable'
                    cells={[
                        { id: 'tag', label: 'Tag', orderByKey: 'name' },
                        { id: 'related_posts', label: 'Related posts', orderByKey: 'popular' }
                    ]}
                    endpoint='/tags?site=stackoverflow'
                    queryKey={['tags']}
                />
            </Container>
        </div>
    );
}
