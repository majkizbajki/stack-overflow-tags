import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from '@/lib/components/Layout';

const meta = {
    title: 'Layout/Layout',
    component: Layout
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        children: <div />
    }
};
