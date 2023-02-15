import {CommentType} from "./type_comment";

export type PostType = {
    id: number,
    title: string,
    body: string,
    userId: number,
    comments?: CommentType[]
}
