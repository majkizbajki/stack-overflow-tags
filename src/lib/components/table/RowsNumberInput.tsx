import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useDebouncedCallback } from 'use-debounce';

import { Colors } from '@/lib/theme/colors';

interface RowsNumberInputProps {
    onPerPageChange: (perPage: number) => void;
    defaultValue: number;
}

export const MAX_PER_PAGE = 100;
export const MIN_PER_PAGE = 1;

export const RowsNumberInput = ({ onPerPageChange, defaultValue }: RowsNumberInputProps) => {
    const debouncer = useDebouncedCallback((page: number) => {
        onPerPageChange(page);
    }, 500);

    const [value, setValue] = useState(`${defaultValue}`);

    const onChange = (text: string) => {
        if (Number(text)) {
            const page = Math.min(Math.max(MIN_PER_PAGE, Number(text)), MAX_PER_PAGE);

            setValue(`${page}`);
            debouncer(page);
            return;
        }

        setValue('');
    };

    const onBlur = (text: string) => {
        if (!Number(text)) {
            setValue(`${MIN_PER_PAGE}`);
            onPerPageChange(MIN_PER_PAGE);
        }
    };

    const handleAddPerPage = (summand: number) => {
        if (Number(value) + summand < MIN_PER_PAGE) {
            setValue(`${MIN_PER_PAGE}`);
            onPerPageChange(MIN_PER_PAGE);
            return;
        }

        if (Number(value) + summand > MAX_PER_PAGE) {
            setValue(`${MAX_PER_PAGE}`);
            onPerPageChange(MAX_PER_PAGE);
            return;
        }

        setValue(state => `${+state + summand}`);
        onPerPageChange(Number(value) + summand);
    };

    return (
        <section className='mb-4 flex items-center justify-end gap-4'>
            <TextField
                label='Rows per page'
                sx={{
                    '& .MuiOutlinedInput-root': {
                        color: Colors.secondary,
                        '&:hover fieldset': {
                            borderColor: Colors.secondary
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: Colors.secondary
                        },
                        '&.Mui-focused': {
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: Colors.primary
                            }
                        }
                    },
                    '& .MuiInputLabel-root': {
                        color: Colors.secondary,
                        '&.Mui-focused': {
                            color: Colors.primary
                        }
                    }
                }}
                value={value}
                onChange={event => onChange(event.target.value)}
                onBlur={event => onBlur(event.target.value)}
                size='small'
            />
            <Button
                onClick={() => handleAddPerPage(-5)}
                disabled={Number(value) === MIN_PER_PAGE}
                sx={{
                    color: Colors.secondary,
                    '&:hover': {
                        backgroundColor: 'rgba(244, 128, 35, 0.25)'
                    },
                    '&:disabled': {
                        backgroundColor: 'rgba(244, 128, 35, 0.25)',
                        color: Colors.primary
                    }
                }}
            >
                -5
            </Button>
            <Button
                onClick={() => handleAddPerPage(5)}
                disabled={Number(value) === MAX_PER_PAGE}
                sx={{
                    color: Colors.secondary,
                    '&:hover': {
                        backgroundColor: 'rgba(244, 128, 35, 0.25)'
                    },
                    '&:disabled': {
                        backgroundColor: 'rgba(244, 128, 35, 0.25)',
                        color: Colors.primary
                    }
                }}
            >
                +5
            </Button>
        </section>
    );
};
