import {SlimUserType, UserType} from "../../types/type_user";
import {MOCK_ADDRESSES} from "./mock_address";
import {MOCK_COMPANIES} from "./mock_company";
import {MOCK_TODOS} from "./mock_todo";
import {MOCK_POSTS} from "./mock_posts";

export const MOCK_USERS: UserType[] = [
    {
        id: 1,
        name: "user_1",
        username: "user_1",
        email: "user_1@gmail.com",
        address: MOCK_ADDRESSES[0],
        phone: "+972525181648",
        website: "www.one.co.il",
        company: MOCK_COMPANIES[0]
    },
    {
        id: 2,
        name: "user_2",
        username: "user_2",
        email: "user_2@gmail.com",
        address: MOCK_ADDRESSES[1],
        phone: "+972525181648",
        website: "www.two.co.il",
        company: MOCK_COMPANIES[1]
    },
    {
        id: 3,
        name: "user_3",
        username: "user_3",
        email: "user_3@gmail.com",
        address: MOCK_ADDRESSES[2],
        phone: "+972525181648",
        website: "www.three.co.il",
        company: MOCK_COMPANIES[2]
    },
    {
        id: 4,
        name: "user_4",
        username: "user_4",
        email: "user_4@gmail.com",
        address: MOCK_ADDRESSES[0],
        phone: "+972525181648",
        website: "www.four.co.il",
        company: MOCK_COMPANIES[0]
    },
    {
        id: 5,
        name: "user_5",
        username: "user_5",
        email: "user_5@gmail.com",
        address: MOCK_ADDRESSES[1],
        phone: "+972525181648",
        website: "www.five.co.il",
        company: MOCK_COMPANIES[0]
    },
    {
        id: 6,
        name: "user_6",
        username: "user_6",
        email: "user_6@gmail.com",
        address: MOCK_ADDRESSES[2],
        phone: "+972525181648",
        website: "www.six.co.il",
        company: MOCK_COMPANIES[1]
    },
]

export const MOCK_USERS_SMALL: UserType[] = [
    {
        id: 1,
        name: "user_11",
        username: "user_11",
        email: "user_11@gmail.com",
        address: MOCK_ADDRESSES[0],
        phone: "+972525181648",
        website: "www.one.co.il",
        company: MOCK_COMPANIES[0]
    },
    {
        id: 2,
        name: "user_12",
        username: "user_12",
        email: "user_12@gmail.com",
        address: MOCK_ADDRESSES[1],
        phone: "+972525181648",
        website: "www.two.co.il",
        company: MOCK_COMPANIES[1]
    },
]

export const MOCK_USERS_SMALL_WITH_TODOS: UserType[] = [
    {
        id: 1,
        name: "user_11",
        username: "user_11",
        email: "user_11@gmail.com",
        address: MOCK_ADDRESSES[0],
        phone: "+972525181648",
        website: "www.one.co.il",
        company: MOCK_COMPANIES[0],
        todos: [MOCK_TODOS[0]]
    },
    {
        id: 2,
        name: "user_12",
        username: "user_12",
        email: "user_12@gmail.com",
        address: MOCK_ADDRESSES[1],
        phone: "+972525181648",
        website: "www.two.co.il",
        company: MOCK_COMPANIES[1],
        todos: [MOCK_TODOS[1], MOCK_TODOS[2]]
    },
]

export const MOCK_SLIM_USERS: SlimUserType[] = [
    {
        name: "user_1",
        email: "user_1@gmail.com",
        todoCount: 0
    },
    {
        name: "user_2",
        email: "user_2@gmail.com",
        todoCount: 0
    },
    {
        name: "user_3",
        email: "user_3@gmail.com",
        todoCount: 0

    },
    {
        name: "user_4",
        email: "user_4@gmail.com",
        todoCount: 0
    },
    {
        name: "user_5",
        email: "user_5@gmail.com",
        todoCount: 0
    },
    {
        name: "user_6",
        email: "user_6@gmail.com",
        todoCount: 0
    },
]

export const MOCK_USER_WITH_POSTS: UserType[] = [
    {
        id: 2,
        name: "user_2",
        username: "user_2",
        email: "user_2@gmail.com",
        address: MOCK_ADDRESSES[1],
        phone: "+972525181648",
        website: "www.two.co.il",
        company: MOCK_COMPANIES[1],
        posts: [MOCK_POSTS[1], MOCK_POSTS[2]]
    },
    {
        id: 3,
        name: "user_3",
        username: "user_3",
        email: "user_3@gmail.com",
        address: MOCK_ADDRESSES[2],
        phone: "+972525181648",
        website: "www.three.co.il",
        company: MOCK_COMPANIES[2],
        posts: [MOCK_POSTS[3], MOCK_POSTS[4], MOCK_POSTS[5]]
    },
    {
        id: 4,
        name: "user_4",
        username: "user_4",
        email: "user_4@gmail.com",
        address: MOCK_ADDRESSES[0],
        phone: "+972525181648",
        website: "www.four.co.il",
        company: MOCK_COMPANIES[0],
        posts: [MOCK_POSTS[6], MOCK_POSTS[7], MOCK_POSTS[8], MOCK_POSTS[9]]
    },
]
