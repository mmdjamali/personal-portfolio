export type ApiResponse<T> =
    | {
        success: false;
        status: number;
        message?: string;
    }
    | {
        success: true;
        status: number;
        message?: string;
        data: T;
    };

type PaginatedData<T> = {
    items: T;
    pageIndex: number;
    hasNextPage: boolean;
};


export type GetEmployeesApiResponse = ApiResponse<null>;