import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import {BaseApi} from "./base-api";
import {defaultErrorType, ApiClient, ErrorResponse, SuccessType, Params, Body} from "../../types";

export class AxiosProvider extends BaseApi implements ApiClient {
    private _instance: AxiosInstance;

    constructor(baseUrl: string) {
        super(baseUrl);

        this._instance = axios.create({
            baseURL: this._baseUrl,
        });
    }

    setHeaders(headers: { [key: string]: string }): void {
        for (const header in headers) {
            this._instance.defaults.headers.common[header] = headers[header];
        }
    }

    _successResponseHandler(response: AxiosResponse): SuccessType<any> {
        return {data: response.data, success: true};
    }

    _errorResponseHandler(error: AxiosError): ErrorResponse {
        const defaultError: defaultErrorType = {message: "Сервер недоступен"};
        const responseData = error.response?.data ||
            error.response?.data?.errors ||
            error.response?.data?.message || [defaultError];
        const errorData: ErrorResponse = {
            error: true,
            response: responseData,
            status: error.response?.status || false,
        };
        return {...errorData};
    }

    public async post<T>(path: string, body: Body, params?: Params): Promise<SuccessType<T> | ErrorResponse> {
        try {
            const response = await this._instance.post(path, body, params);
            return this._successResponseHandler(response);
        } catch (error: any) {
            if (error.isAxiosError) {
                return this._errorResponseHandler(error);
            }
            throw new Error(error);
        }
    }

    public async get<T>(path: string, params?: Params): Promise<SuccessType<T> | ErrorResponse> {
        try {
            const response = await this._instance.get(path, params);
            return this._successResponseHandler(response);
        } catch (error: any) {
            if (error.isAxiosError) {
                return this._errorResponseHandler(error);
            }
            throw new Error(error);
        }
    }

    public async edit<T>(path: string, body: Body, params?: Params): Promise<SuccessType<T> | ErrorResponse> {
        try {
            const response = await this._instance.put(path, body, params);
            return this._successResponseHandler(response);
        } catch (error: any) {
            if (error.isAxiosError) {
                return this._errorResponseHandler(error);
            }
            throw new Error(error);
        }
    }

    public async remove<T>(path: string, params?: Params): Promise<SuccessType<T> | ErrorResponse> {
        try {
            const response = await this._instance.delete(path, params);
            return this._successResponseHandler(response);
        } catch (error: any) {
            if (error.isAxiosError) {
                return this._errorResponseHandler(error);
            }
            throw new Error(error);
        }
    }
}
