import { Order } from '@/lib/types';

export interface Cell {
    id: string;
    label: string;
    value: string;
    orderByKey: string;
}

export type HeadCell = Omit<Cell, 'value'>;

export interface TableDetails {
    order: Order;
    orderBy: string;
    page: number;
    rowsPerPage: number;
}

export interface TableHead {
    onRequestSort: (event: React.MouseEvent<unknown>, property: Cell['label']) => void;
    cells: HeadCell[];
    order: Order;
    orderBy: string;
}
