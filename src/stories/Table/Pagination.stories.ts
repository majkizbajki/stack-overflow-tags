import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';

import { Pagination } from '@/lib/components/table/Pagination';

const meta = {
    title: 'Table/Pagination',
    component: Pagination
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        isNextDisabled: false,
        isPreviousDisabled: false,
        onNextPage: fn(),
        onPreviousPage: fn(),
        page: '10'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const leftArrowButton = canvas.getAllByRole('button')[0];
        const rightArrowButton = canvas.getAllByRole('button')[1];
        const pageInput = canvas.getByRole('textbox');

        await expect(leftArrowButton).toBeInTheDocument();
        await expect(leftArrowButton).not.toBeDisabled();
        await expect(rightArrowButton).toBeInTheDocument();
        await expect(rightArrowButton).not.toBeDisabled();
        await expect(pageInput).toHaveValue('10');
    }
};

export const FirstPage: Story = {
    args: {
        isNextDisabled: false,
        isPreviousDisabled: true,
        onNextPage: fn(),
        onPreviousPage: fn(),
        page: '1'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const leftArrowButton = canvas.getAllByRole('button')[0];
        const rightArrowButton = canvas.getAllByRole('button')[1];
        const pageInput = canvas.getByRole('textbox');

        await expect(leftArrowButton).toBeInTheDocument();
        await expect(leftArrowButton).toBeDisabled();
        await expect(rightArrowButton).toBeInTheDocument();
        await expect(rightArrowButton).not.toBeDisabled();
        await expect(pageInput).toHaveValue('1');
    }
};

export const LastPage: Story = {
    args: {
        isNextDisabled: true,
        isPreviousDisabled: false,
        onNextPage: fn(),
        onPreviousPage: fn(),
        page: '100'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const leftArrowButton = canvas.getAllByRole('button')[0];
        const rightArrowButton = canvas.getAllByRole('button')[1];
        const pageInput = canvas.getByRole('textbox');

        await expect(rightArrowButton).toBeInTheDocument();
        await expect(rightArrowButton).toBeDisabled();
        await expect(leftArrowButton).toBeInTheDocument();
        await expect(leftArrowButton).not.toBeDisabled();
        await expect(pageInput).toHaveValue('100');
    }
};
