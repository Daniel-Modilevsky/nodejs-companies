import {
    getUsersWithValidGeoCode,
    getUsersWithTodos,
    getSlimUser,
    getUsersWithFewPosts
} from "../controllers/controller_user";
import {
    MOCK_SLIM_USERS,
    MOCK_USER_WITH_POSTS,
    MOCK_USERS,
    MOCK_USERS_SMALL,
    MOCK_USERS_SMALL_WITH_TODOS
} from "./mocks/mock_user";
import {MOCK_TODOS} from "./mocks/mock_todo";
import {MOCK_POSTS} from "./mocks/mock_posts";
import {UserType} from "../types/type_user";

// TODO: DEBUG THE 'getUsersWithTodos' FUNCTION
describe('Testing users controllers functions', () => {
    test('Testing get Users With Valid Geo Code', () => {
        const tempUsers = [...MOCK_USERS]
        let mockUsersWithInvalidGeoCode = JSON.parse(JSON.stringify(tempUsers));
        mockUsersWithInvalidGeoCode[0].address.geo.lat = "a"
        mockUsersWithInvalidGeoCode[1].address.geo.lng = "b"

        const usersWithValidCode: UserType[] = getUsersWithValidGeoCode(tempUsers);
        const usersWithInvalidGeoCode: UserType[] = getUsersWithValidGeoCode(mockUsersWithInvalidGeoCode);
        expect(usersWithValidCode.length).toBe(6)
        expect(usersWithInvalidGeoCode.length).toBe(4)
    })
    test('Testing get the todos of users', () => {
        const tempUsers = [...MOCK_USERS]
        const usersWithValidCode = getUsersWithTodos(tempUsers, [...MOCK_TODOS]);
        expect(usersWithValidCode.length).toBe(MOCK_USERS.length)
        const smallUsersListWithValidCode = getUsersWithTodos([...MOCK_USERS_SMALL], [...MOCK_TODOS]);
        expect(smallUsersListWithValidCode).toStrictEqual(MOCK_USERS_SMALL_WITH_TODOS)
    })
    test('Testing get slim users list', () => {
        const tempUsers = [...MOCK_USERS]
        const slimUsersList = getSlimUser(tempUsers);
        expect(slimUsersList.length).toBe(MOCK_SLIM_USERS.length)
        expect(slimUsersList).toStrictEqual(MOCK_SLIM_USERS)
    })
    test('Testing get slim users list', () => {
        const tempUsers = [...MOCK_USERS]
        const usersWithPosts: UserType[] = getUsersWithFewPosts([...MOCK_USERS], [...MOCK_POSTS]);
        expect(usersWithPosts.length).toBe(3)
        expect(usersWithPosts[0].id).toStrictEqual(2)
        expect(usersWithPosts[0].posts && usersWithPosts[0].posts.length).toStrictEqual(2)
        expect(usersWithPosts[0].posts && usersWithPosts[0].posts).toStrictEqual(MOCK_USER_WITH_POSTS[0].posts)
        expect(usersWithPosts[0]).toStrictEqual(MOCK_USER_WITH_POSTS[0])
    })
})
