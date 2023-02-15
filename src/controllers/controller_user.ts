import axios from "axios";
import {JSON_PLACE_HOLDER_API} from "../constans /api_jsonPlaceHolder";
import {TodoType} from "../types/type_todo";
import {SlimUserType, UserType} from "../types/type_user";
import {PostType} from "../types/type_post";
import {isValidGeoCode} from "../middlware/validation_address";


export const getUsers = async () => {
    try {
        return axios.get(JSON_PLACE_HOLDER_API.GET_ALL_USERS_URL).then(response => response.data)
    } catch (error) {
        throw 'Problem to fetch users';
    }
};


export const getUsersWithFewPosts = (users: UserType[], posts: PostType[]) => {
    try {
        posts.map(post => {
            users.map(user => {
                if (!user.posts?.length)
                    user.posts = []
                if (post.userId === user.id)
                    user.posts.push(post)
            })
        })

        const filteredUsers = users.filter(user => {
            if (user.posts && user.posts.length > 1)
                return user
        })
        return filteredUsers;
    } catch (error) {
        throw 'Problem to fetch users with posts and comments';
    }
}

export const getUsersWithValidGeoCode = (users: UserType[]): UserType[] => {
    try {
        let usersWithValidGeoCode: UserType[] = []
        users.map(user => {
            if (isValidGeoCode(user.address.geo))
                usersWithValidGeoCode.push(user)
        })
        return usersWithValidGeoCode;
    } catch (error) {
        throw 'Problem to fetch users with posts and comments';
    }
}

export const getUsersWithTodos = (users: UserType[], todos: TodoType[]): UserType[] => {
    try {
        const tempUsers = JSON.parse(JSON.stringify([...users]))
        todos.map((todo: TodoType) => {
            tempUsers.map((user: UserType) => {
                if (todo.userId === user.id) {
                    if (!user.todos)
                        user.todos = []
                    user.todos.push(todo)
                }
            })
        })
        return tempUsers;
    } catch (error) {
        throw 'Problem to fetch users';
    }
}

export const getSlimUser = (users: UserType[]): SlimUserType[] => {
    return users.map(user => {
        return {
            name: user.name,
            email: user.email,
            todoCount: user?.completedTodos ? user.completedTodos : 0
        }
    })
}
