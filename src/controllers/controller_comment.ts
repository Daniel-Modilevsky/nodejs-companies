import axios from "axios";
import {JSON_PLACE_HOLDER_API} from "../constans /api_jsonPlaceHolder";

export const getComments = async function () {
    try {
        return axios.get(JSON_PLACE_HOLDER_API.GET_ALL_COMMENTS_URL).then(response => response.data)
    } catch (error) {
        throw 'Problem to fetch comments';
    }
};
