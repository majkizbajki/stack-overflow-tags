'use client';

import { Button, Typography } from '@mui/material';
import { Colors } from '../theme/colors';

interface ErrorMessageProps {
    onRetry: () => void;
    message: string;
}

export const ErrorMessage = ({ onRetry, message }: ErrorMessageProps) => {
    return (
        <div className='my-8 flex flex-col items-center gap-8 px-8'>
            <div className='flex flex-col items-center gap-4'>
                <Typography variant='h5' sx={{ color: Colors.error }}>
                    Error
                </Typography>
                <Typography variant='body1' sx={{ color: Colors.tertiary }}>
                    {message}
                </Typography>
            </div>
            <Button
                variant='contained'
                onClick={onRetry}
                sx={{ backgroundColor: Colors.surface, '&:hover': { backgroundColor: Colors.primary } }}
            >
                Retry
            </Button>
        </div>
    );
};
