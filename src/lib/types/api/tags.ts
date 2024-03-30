import { Order } from '../index';

export interface TagsQuery {
    order: Order;
    pagesize: number;
    sort: 'popular' | 'activity' | 'name';
}

export interface TagsResponse {
    items: Tag[];
    has_more: boolean;
}

export interface Tag {
    count: number;
    name: string;
}
