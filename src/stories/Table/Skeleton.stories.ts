import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Skeleton } from '@/lib/components/table/Skeleton';

const meta = {
    title: 'Table/Skeleton',
    component: Skeleton
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        rows: 8
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const container = canvas.getByTestId('skeleton-container');

        await expect(container).toBeInTheDocument();
        await expect(container.children).toHaveLength(8);
    }
};
