import {Request, Response} from "express";

import {
    getSlimUser,
    getUsers,
    getUsersWithFewPosts,
    getUsersWithValidGeoCode, getUsersWithTodos
} from "./controller_user";
import {getTodos} from "./controller_todo";
import {getPosts, getPostsWithNumberOfComments} from "./controller_post";
import {getComments} from "./controller_comment";
import {UserType} from "../types/type_user";
import {PostType} from "../types/type_post";
import {CompanyDataResponseType, CompanyType} from "../types/type_company";

export const NUMBER_OF_COMPLETED_TASKS_TO_ACTIVE_USER = 3

export const getListOfDistinctCompanies = (users: UserType[]): string[] => {
    let companiesNames: string[] = []
    users.map((user: UserType) => {
        if (!companiesNames.length) {
            companiesNames.push(user.company.name)
        }

        if (!companiesNames.find(companyName => companyName === user.company.name))
            companiesNames.push(user.company.name)
    })
    return companiesNames
}

export const getCompanySearchStr = async function (req: Request, res: Response) {
    try {
        const companyQueryParam = req.query.company;
        if (!companyQueryParam) {
            return res.status(400).send('Problem to fetch companies - Company name did not received');
        }
        let [users, todos, posts, comments] = await Promise.all([
            getUsers(),
            getTodos(),
            getPosts(),
            getComments(),
        ]);

        // Calculate the number of completed tasks for each user
        // Filter the users to only include those with more than 3 completed tasks
        const usersWithTodos: UserType[] = getUsersWithTodos(users, todos);

        // Filter the users to only include those with filled Geo location data
        const usersWithValidCode: UserType[] = getUsersWithValidGeoCode(usersWithTodos);

        // Calculate the number of comments for each post
        // Filter the posts to only include those with more than 3 comments
        const filteredPosts: PostType[] = getPostsWithNumberOfComments(posts, comments, NUMBER_OF_COMPLETED_TASKS_TO_ACTIVE_USER);

        // Calculate the number of posts for each user
        // Filter the users to only include those with more than 2 posts
        const usersWithPostsAndComments: UserType[] = getUsersWithFewPosts(usersWithValidCode, filteredPosts);

        // Get a list of distinct company names
        const companiesNames: string[] = getListOfDistinctCompanies(usersWithPostsAndComments)

        // Get a list of users names and emails
        const slimUserList = getSlimUser(usersWithPostsAndComments)

        const companyData: CompanyDataResponseType = {
            companyNames: companiesNames,
            userData: slimUserList
        }
        return res.status(200).json(companyData);
    } catch (error) {
        return res.status(400).send(`Problem to fetch companies - ${error}`);
    }
};
