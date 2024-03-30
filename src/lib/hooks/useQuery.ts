'use client ';

import { QueryKey, useQuery as useReactQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { ErrorResponse, FetchedData } from '../types/api';
import { mapError } from '../utils/mapError';

interface UseQueryDataProps {
    endpoint: string;
    queryKey: QueryKey;
}

export const useQuery = <T>({ endpoint, queryKey }: UseQueryDataProps) => {
    const fetchData = async (): Promise<FetchedData<T>> => {
        try {
            const { data }: FetchedData<T> = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`);

            return { data };
        } catch (error) {
            if (error instanceof AxiosError) {
                throw mapError((error as AxiosError).response?.data);
            }

            throw mapError(error);
        }
    };

    const { data, error, isError, isLoading, isSuccess, refetch } = useReactQuery<FetchedData<T>, ErrorResponse>({
        queryKey,
        queryFn: fetchData
    });

    return {
        data: data?.data,
        error,
        isError,
        isLoading,
        isSuccess,
        refetch
    };
};
