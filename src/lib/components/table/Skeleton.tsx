import { Box, Skeleton as MUISkeleton } from '@mui/material';

interface SkeletonProps {
    rows: number;
}

export const Skeleton = ({ rows }: SkeletonProps) => {
    return (
        <Box>
            {Array.from({ length: rows }).map((_, index) => (
                <MUISkeleton
                    key={`skeleton-row-${index}`}
                    variant='rounded'
                    sx={{ my: 2, borderRadius: 1, bgcolor: 'grey.700' }}
                    height={32}
                />
            ))}
        </Box>
    );
};
