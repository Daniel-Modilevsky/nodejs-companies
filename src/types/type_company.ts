import {SlimUserType, UserType} from "./type_user";

export type CompanyType = {
    name: string,
    catchPhrases: string,
    bs: string,
    employs?: UserType[]
}

export type CompanyDataResponseType = {
    companyNames: string[],
    userData: SlimUserType[]
}