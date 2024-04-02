import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';

import { TableHeader as TableHeaderComponent } from '@/lib/components/table/TableHeader';
import { ReactQueryProvider } from '@/lib/utils/providers/ReactQueryProvider';

const meta = {
    title: 'Table/TableHeader',
    component: TableHeaderComponent,
    decorators: [Story => <ReactQueryProvider>{Story()}</ReactQueryProvider>]
} satisfies Meta<typeof TableHeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TableHeader: Story = {
    args: {
        cells: [
            { id: 'label1', label: 'Label 1', orderByKey: 'label1' },
            { id: 'label2', label: 'Label 2', orderByKey: 'label2' },
            { id: 'label3', label: 'Label 3', orderByKey: 'label3' },
            { id: 'label4', label: 'Label 4', orderByKey: 'label4' }
        ],
        onRequestSort: fn(),
        order: 'desc',
        orderBy: ''
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const labels = canvas.getAllByText(/Label/);

        await expect(labels).toHaveLength(4);
    }
};

export const TableHeaderOrderAscByName: Story = {
    args: {
        cells: [
            { id: 'tag', label: 'Tag', orderByKey: 'name' },
            { id: 'related_posts', label: 'Related posts', orderByKey: 'popular' }
        ],
        onRequestSort: fn(),
        order: 'asc',
        orderBy: 'name'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const columns = canvas.getAllByRole('columnheader');
        const activeColumn = canvas.getByText('Tag');

        await expect(columns).toHaveLength(2);
        await expect(columns[0]).toHaveTextContent('Tag');
        await expect(activeColumn).toHaveClass('Mui-active');
        await expect(columns[1]).toHaveTextContent('Related posts');
    }
};
