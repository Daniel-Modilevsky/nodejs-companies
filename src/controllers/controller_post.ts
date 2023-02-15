import axios from "axios";
import {JSON_PLACE_HOLDER_API} from "../constans /api_jsonPlaceHolder";
import {PostType} from "../types/type_post";
import {CommentType} from "../types/type_comment";

export const getPosts = async function () {
    try {
        return axios.get(JSON_PLACE_HOLDER_API.GET_ALL_POSTS_URL).then(response => response.data)
    } catch (error) {
        throw 'Problem to fetch posts';
    }
};


export const getPostsWithNumberOfComments = (posts: PostType[], comments: CommentType[], numberOfComments: number): PostType[] => {
    try {
        comments.map(comment => {
            posts.map(post => {
                if (!post.comments?.length)
                    post.comments = []
                if (post.id === comment.postId)
                    post.comments.push(comment)
            })
        })

        // run again on posts to reduce them
        const filteredPosts = posts.filter((post) => {
            if (post.comments && post.comments?.length >= numberOfComments)
                return post
        })
        return filteredPosts;
    } catch (error) {
        throw 'Problem to fetch users with posts and comments';
    }
}