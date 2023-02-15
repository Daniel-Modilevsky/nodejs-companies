import {getListOfDistinctCompanies} from "../controllers/controller_company";
import {MOCK_USERS} from "./mocks/mock_user";
import {MOCK_COMPANIES_NAMES} from "./mocks/mock_company";


describe('Testing company controllers functions', () => {
    test('Testing get list of distinct companies', () => {
        const distinctCompanyNames: string[] = getListOfDistinctCompanies([...MOCK_USERS])
        expect(distinctCompanyNames.length).toBe(3)
        expect(distinctCompanyNames).toStrictEqual(MOCK_COMPANIES_NAMES)
    })
})
