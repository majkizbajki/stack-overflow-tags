import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';

import { ErrorMessage } from '@/lib/components/ErrorMessage';

const meta = {
    title: 'Error/Error',
    component: ErrorMessage
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        message: 'Unexpected error occurred',
        onRetry: fn()
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const title = canvas.getByText(/Error/);
        const message = canvas.getByText(/Unexpected error occurred/);
        const button = canvas.getByRole('button');

        await expect(title).toBeInTheDocument();
        await expect(message).toBeInTheDocument();
        await expect(button).toBeInTheDocument();
    }
};
