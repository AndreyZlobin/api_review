import {$http} from "./http";
import {todosEndpoints} from "./endpoints";
import {Todo} from "./types";
import './style.css'

const test1 = document.querySelector<HTMLElement>('.test-1')!

const {getTodos} = todosEndpoints

const someErrorhandler = (error: unknown) => {
    console.log(error)
}

const getRequest = async (): Promise<Todo[] | void> => {
    const result = await $http.get<Todo[]>(getTodos);

    if ('success' in result) {
        return result.data
    }
    someErrorhandler(result.error)
};
getRequest().then(posts => {
    test1.innerHTML = `${JSON.stringify(posts, null, 2)}`
});


