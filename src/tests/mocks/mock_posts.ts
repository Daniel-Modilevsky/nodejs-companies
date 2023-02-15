import {PostType} from "../../types/type_post";

export const MOCK_POSTS: PostType[] = [
    {
        id: 1,
        title: "post_1",
        body: "body_1",
        userId: 1,
    },
    {
        id: 2,
        title: "post_2",
        body: "body_2",
        userId: 2,
    },
    {
        id: 3,
        title: "post_3",
        body: "body_3",
        userId: 2,
    },
    {
        id: 4,
        title: "post_4",
        body: "body_4",
        userId: 3,
    },
    {
        id: 5,
        title: "post_5",
        body: "body_5",
        userId: 3,
    },
    {
        id: 6,
        title: "post_6",
        body: "body_6",
        userId: 3,
    },
    {
        id: 7,
        title: "post_7",
        body: "body_7",
        userId: 4,
    },
    {
        id: 8,
        title: "post_8",
        body: "body_8",
        userId: 4,
    },
    {
        id: 9,
        title: "post_9",
        body: "body_9",
        userId: 4,
    },
    {
        id: 10,
        title: "post_10",
        body: "body_10",
        userId: 4,
    }
]

export const MOCK_POSTS_WITH_COMMENTS: PostType[] = [
    {
        id: 10,
        title: "post_10",
        body: "body_10",
        userId: 4,
        comments: [
            {
                body: "body_1",
                email: "user_1",
                id: 1,
                name: "comment_1",
                postId: 10
            },
            {
                body: "body_6",
                email: "user_3",
                id: 6,
                name: "comment_6",
                postId: 10
            }
        ]
    }
]
