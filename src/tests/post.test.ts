import {getPostsWithNumberOfComments} from "../controllers/controller_post";
import {MOCK_POSTS, MOCK_POSTS_WITH_COMMENTS} from "./mocks/mock_posts";
import {MOCK_COMMENTS} from "./mocks/mock_comments";
import {PostType} from "../types/type_post";


describe('Testing post controllers functions', () => {
    test('Testing get Posts With Number Of Comments', () => {
        const postsWithXcomments: PostType[] = getPostsWithNumberOfComments([...MOCK_POSTS], [...MOCK_COMMENTS], 2)
        expect(postsWithXcomments.length).toBe(1)
        expect(postsWithXcomments).toStrictEqual(MOCK_POSTS_WITH_COMMENTS)
    })
})
