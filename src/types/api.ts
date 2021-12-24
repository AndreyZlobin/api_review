import {Params, Body, SuccessType, ErrorResponse} from "../types";

export interface ApiClient {
    get<T>(path: string, params?: object): Promise<SuccessType<T> | ErrorResponse>

    post<T>(path: string, body: Body, params?: Params): Promise<SuccessType<T> | ErrorResponse>

    edit<T>(path: string, body: Body, params?: Params): Promise<SuccessType<T> | ErrorResponse>

    remove<T>(path: string, params?: Params): Promise<SuccessType<T> | ErrorResponse>
}
