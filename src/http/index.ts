import {AxiosProvider} from "./providers/axios.provider";
import {BaseApi} from "./providers/base-api";
import {ApiClient, SuccessType, ErrorResponse, Body, Params} from "../types";
import {BASE_API_URL} from "../constants/root";

/**
 * @example
 * const $http = new HttpClient('BASE_API_PATH')
 * const getResponse = async (path) => await $http.get(path)
 * */
class HttpClient extends BaseApi implements ApiClient {
    constructor(baseUrl: string, private provider: ApiClient) {
        super(baseUrl);
    }

    /**
     * @param {string} path
     * @param {object} params
     * */
    async get<T>(path: string, params?:Params): Promise<SuccessType<T> | ErrorResponse> {
        return await this.provider.get(path, params);
    }

    /**
     * @param {string} path
     * @param {object} body
     * @param {object} params
     * */
    async post<T>(
        path: string,
        body: Body,
        params?: Params,
    ): Promise<SuccessType<T> | ErrorResponse> {
        return await this.provider.post(path, body, params);
    }

    /**
     * @param {string} path
     * @param {object} body
     * @param {object} params
     * */
    async edit<T>(
        path: string,
        body: Body,
        params?: Params,
    ): Promise<SuccessType<T> | ErrorResponse> {
        return await this.provider.edit(path, body, params);
    }

    /**
     * @param {string} path
     * @param {object} params
     * */
    async remove<T>(path: string, params ?:Params): Promise<SuccessType<T> | ErrorResponse> {
        return await this.provider.remove(path, params);
    }
}

const $http = new HttpClient(BASE_API_URL, new AxiosProvider(BASE_API_URL));

export {$http};


