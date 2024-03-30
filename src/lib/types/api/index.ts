export interface ErrorResponse {
    error_message: string;
    error_id?: number;
    error_name?: string;
}

export interface FetchedData<T> {
    data: T | null;
}
