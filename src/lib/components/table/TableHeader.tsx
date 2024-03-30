import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Cell, TableHead as TableHeadType } from './types';

import { Colors } from '@/lib/theme/colors';

export const TableHeader = ({ onRequestSort, cells, order, orderBy }: TableHeadType) => {
    const createSortHandler = (property: Cell['orderByKey']) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {cells.map(headCell => (
                    <TableCell key={headCell.id} sortDirection={orderBy === headCell.orderByKey ? order : false}>
                        <TableSortLabel
                            active={orderBy === headCell.orderByKey}
                            direction={orderBy === headCell.orderByKey ? order : 'asc'}
                            onClick={createSortHandler(headCell.orderByKey)}
                            sx={{
                                color: Colors.secondary,
                                '&.Mui-active': {
                                    color: Colors.secondary,
                                    '& .MuiTableSortLabel-icon': {
                                        color: Colors.primary
                                    }
                                },
                                '&:hover': {
                                    color: Colors.secondary
                                },
                                '& .MuiTableSortLabel-icon': {
                                    color: Colors.primary
                                }
                            }}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
