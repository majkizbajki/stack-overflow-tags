import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { MAX_PER_PAGE, MIN_PER_PAGE, RowsNumberInput } from '@/lib/components/table/RowsNumberInput';

const meta = {
    title: 'Table/RowsNumberInput',
    component: RowsNumberInput
} satisfies Meta<typeof RowsNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        defaultValue: 25,
        onPerPageChange: fn()
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const perPageInput = canvas.getByLabelText(/per page/);
        const addButton = canvas.getByRole('button', { name: '+5' });
        const deductButton = canvas.getByRole('button', { name: '-5' });

        await expect(perPageInput).toBeInTheDocument();
        await expect(addButton).toBeInTheDocument();
        await expect(deductButton).toBeInTheDocument();
        await expect(addButton).not.toBeDisabled();
        await expect(deductButton).not.toBeDisabled();
        await expect(perPageInput).toHaveValue('25');

        await userEvent.click(addButton);
        await expect(perPageInput).toHaveValue('30');

        await userEvent.click(deductButton);
        await expect(perPageInput).toHaveValue('25');

        await userEvent.clear(perPageInput);
        await userEvent.type(perPageInput, `${MIN_PER_PAGE - 1}`);
        await userEvent.tab();
        await expect(perPageInput).toHaveValue(`${MIN_PER_PAGE}`);
        await expect(deductButton).toBeDisabled();

        await userEvent.clear(perPageInput);
        await userEvent.type(perPageInput, 'abc');
        await userEvent.tab();
        await expect(perPageInput).toHaveValue(`${MIN_PER_PAGE}`);
        await expect(deductButton).toBeDisabled();

        await userEvent.clear(perPageInput);
        await userEvent.type(perPageInput, `${MAX_PER_PAGE + 1}`);
        await userEvent.tab();
        await expect(perPageInput).toHaveValue(`${MAX_PER_PAGE}`);
        await expect(addButton).toBeDisabled();

        await userEvent.clear(perPageInput);
        await userEvent.type(perPageInput, '25');
        await userEvent.tab();
    }
};

export const MinPerPage: Story = {
    args: {
        defaultValue: MIN_PER_PAGE,
        onPerPageChange: fn()
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const perPageInput = canvas.getByLabelText(/per page/);
        const addButton = canvas.getByRole('button', { name: '+5' });
        const deductButton = canvas.getByRole('button', { name: '-5' });

        await expect(perPageInput).toBeInTheDocument();
        await expect(addButton).toBeInTheDocument();
        await expect(deductButton).toBeInTheDocument();
        await expect(addButton).not.toBeDisabled();
        await expect(deductButton).toBeDisabled();
        await expect(perPageInput).toHaveValue(`${MIN_PER_PAGE}`);
    }
};

export const MaxPerPage: Story = {
    args: {
        defaultValue: MAX_PER_PAGE,
        onPerPageChange: fn()
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const perPageInput = canvas.getByLabelText(/per page/);
        const addButton = canvas.getByRole('button', { name: '+5' });
        const deductButton = canvas.getByRole('button', { name: '-5' });

        await expect(perPageInput).toBeInTheDocument();
        await expect(addButton).toBeInTheDocument();
        await expect(deductButton).toBeInTheDocument();
        await expect(addButton).toBeDisabled();
        await expect(deductButton).not.toBeDisabled();
        await expect(perPageInput).toHaveValue(`${MAX_PER_PAGE}`);
    }
};
