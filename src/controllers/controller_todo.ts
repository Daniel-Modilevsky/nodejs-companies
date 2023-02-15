import axios from "axios";
import {JSON_PLACE_HOLDER_API} from "../constans /api_jsonPlaceHolder";

export const getTodos = async function () {
    try {
        return axios.get(JSON_PLACE_HOLDER_API.GET_ALL_TODOS_URL).then(response => response.data)
    } catch (error) {
        throw 'Problem to fetch todos';
    }
};
