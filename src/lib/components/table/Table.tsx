'use client';

import { MouseEvent, useEffect, useState } from 'react';
import { Box, Table as MUITable, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { QueryKey } from '@tanstack/react-query';
import { Pagination } from './Pagination';
import { RowsNumberInput } from './RowsNumberInput';
import { Skeleton } from './Skeleton';
import { TableHeader } from './TableHeader';
import { HeadCell, TableDetails } from './types';
import { ErrorMessage } from '../ErrorMessage';

import { useQuery } from '@/lib/hooks/useQuery';
import { Colors } from '@/lib/theme/colors';
import { TagsResponse } from '@/lib/types/api/tags';

interface TableProps {
    ariaLabel: string;
    cells: HeadCell[];
    endpoint: string;
    queryKey: QueryKey;
}

export const Table = ({ ariaLabel, cells, endpoint, queryKey }: TableProps) => {
    const [tableDetails, setTableDetails] = useState<TableDetails>({
        order: 'desc',
        orderBy: '',
        page: 1,
        rowsPerPage: 25
    });

    const { data, error, isLoading, refetch } = useQuery<TagsResponse>({
        endpoint: `${endpoint}&page=${tableDetails.page}&pagesize=${tableDetails.rowsPerPage}&order=${tableDetails.order}&sort=${tableDetails.orderBy}`,
        queryKey: [...queryKey, `page-${tableDetails.page}`]
    });

    useEffect(() => {
        refetch();
    }, [refetch, tableDetails]);

    const handleRequestSort = (_: MouseEvent<unknown>, property: string) => {
        const isAsc = tableDetails.orderBy === property && tableDetails.order === 'asc';
        setTableDetails(state => ({ ...state, order: isAsc ? 'desc' : 'asc', orderBy: property }));
    };

    const handleChangePage = (page: number) => {
        setTableDetails(state => ({ ...state, page }));
    };

    return (
        <Box sx={{ py: 2 }}>
            <RowsNumberInput
                defaultValue={tableDetails.rowsPerPage}
                onPerPageChange={rowsPerPage => setTableDetails(state => ({ ...state, rowsPerPage }))}
            />
            <TableContainer sx={{ flex: 1 }}>
                <MUITable aria-labelledby={ariaLabel}>
                    <TableHeader
                        order={tableDetails.order}
                        orderBy={tableDetails.orderBy}
                        onRequestSort={handleRequestSort}
                        cells={cells}
                    />
                    <TableBody>
                        {data?.items.map((row, index) => {
                            const labelId = `${row.name}-${index}`;

                            return (
                                <TableRow key={row.name} sx={{ '& .MuiTableCell-root': { color: Colors.secondary } }}>
                                    <TableCell component='th' id={labelId} scope='row' padding='none'>
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.count}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </MUITable>
                {error && <ErrorMessage message={`${error.error_message}`} onRetry={refetch} />}
                {isLoading && <Skeleton rows={8} />}
                <Pagination
                    isNextDisabled={!data?.has_more ?? true}
                    isPreviousDisabled={tableDetails.page === 1}
                    onNextPage={() => handleChangePage(tableDetails.page + 1)}
                    onPreviousPage={() => handleChangePage(tableDetails.page - 1)}
                    page={tableDetails.page.toString()}
                />
            </TableContainer>
        </Box>
    );
};
