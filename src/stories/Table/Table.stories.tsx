import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '@/lib/components/table/Table';
import { ReactQueryProvider } from '@/lib/utils/providers/ReactQueryProvider';

const meta = {
    title: 'Table/Table',
    component: Table,
    decorators: [Story => <ReactQueryProvider>{Story()}</ReactQueryProvider>]
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TagTable: Story = {
    args: {
        ariaLabel: 'tagTable',
        cells: [
            { id: 'tag', label: 'Tag', orderByKey: 'name' },
            { id: 'related_posts', label: 'Related posts', orderByKey: 'popular' }
        ],
        endpoint: '/tags?site=stackoverflow',
        queryKey: ['tags']
    }
};
