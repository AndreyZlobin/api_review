import {ApiClient, Params, Body, SuccessType, ErrorResponse} from "../../types";

export class BaseApi implements ApiClient {

    constructor(protected readonly _baseUrl: string) {
    }

    protected _successResponseHandler(response: unknown) {
        throw new Error('Abstract method, cannot be implemented');
    }

    protected _errorResponseHandler(error: unknown) {
        throw new Error('Abstract method, cannot be implemented');
    }

    async post<T>(path: string, body: Body, params?: Params): Promise<SuccessType<T> | ErrorResponse> {
        throw new Error('Abstract method, cannot be implemented');
    }

    async get<T>(path: string, params?: Params): Promise<SuccessType<T> | ErrorResponse> {
        throw new Error('Abstract method, cannot be implemented');
    }

    async edit<T>(path: string, body: Body, params?:Params): Promise<SuccessType<T> | ErrorResponse> {
        throw new Error('Abstract method, cannot be implemented');
    }

    async remove<T>(path: string, params?: Params): Promise<SuccessType<T> | ErrorResponse> {
        throw new Error('Abstract method, cannot be implemented');
    }
}
