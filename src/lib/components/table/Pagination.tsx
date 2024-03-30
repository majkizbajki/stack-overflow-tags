import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { ButtonGroup, IconButton, TextField } from '@mui/material';

import { Colors } from '@/lib/theme/colors';

interface PaginationProps {
    onNextPage: () => void;
    onPreviousPage: () => void;
    isNextDisabled: boolean;
    isPreviousDisabled: boolean;
    page: string;
}

export const Pagination = ({
    isNextDisabled,
    isPreviousDisabled,
    page,
    onNextPage,
    onPreviousPage
}: PaginationProps) => {
    return (
        <div className='my-4 flex flex-row items-center justify-end gap-x-8'>
            <ButtonGroup>
                <IconButton sx={{ color: Colors.secondary }} onClick={onPreviousPage} disabled={isPreviousDisabled}>
                    <KeyboardArrowLeftIcon sx={{ color: isPreviousDisabled ? Colors.primary : Colors.secondary }} />
                </IconButton>
                <TextField
                    value={page}
                    variant='standard'
                    disabled
                    sx={{
                        '& .MuiInputBase-root.MuiInput-root::before': {
                            borderBottomColor: Colors.secondary,
                            borderBottomStyle: 'solid'
                        },
                        '& .MuiInputBase-input.Mui-disabled': {
                            WebkitTextFillColor: Colors.secondary
                        },
                        '& .MuiInputBase-input': {
                            textAlign: 'center',
                            width: 32
                        }
                    }}
                />
                <IconButton onClick={onNextPage} disabled={isNextDisabled}>
                    <KeyboardArrowRightIcon sx={{ color: isNextDisabled ? Colors.primary : Colors.secondary }} />
                </IconButton>
            </ButtonGroup>
        </div>
    );
};
