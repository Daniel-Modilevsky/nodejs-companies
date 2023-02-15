import {AddressType} from "./type_address";
import {TodoType} from "./type_todo";
import {PostType} from "./type_post";
import {CommentType} from "./type_comment";
import {CompanyType} from "./type_company";

export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressType,
    phone: string,
    website: string,
    company: CompanyType

    todos?: TodoType[]
    posts?: PostType[]
    comments?: CommentType[]
    activeUser?: boolean
    completedTodos?: number
}

export type SlimUserType = {
    name: string,
    email: string,
    todoCount: number
}