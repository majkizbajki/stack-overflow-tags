import { ErrorResponse } from '../types/api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapError = (error: any): ErrorResponse => {
    if ('error_message' in error) {
        const { error_message, error_id, error_name } = error;

        return {
            error_message,
            error_id,
            error_name
        };
    }

    return {
        error_message: 'Unknown error occurred'
    };
};
