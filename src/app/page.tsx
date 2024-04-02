import { Layout } from '@/lib/components/Layout';
import { Table } from '@/lib/components/table/Table';

export default function Home() {
    return (
        <Layout>
            <Table
                ariaLabel='tagTable'
                cells={[
                    { id: 'tag', label: 'Tag', orderByKey: 'name' },
                    { id: 'related_posts', label: 'Related posts', orderByKey: 'popular' }
                ]}
                endpoint='/tags?site=stackoverflow'
                queryKey={['tags']}
            />
        </Layout>
    );
}
