import {isValidGeoCode} from "../middlware/validation_address";

const VALID_GEO_CODE: any = {lat: '123', lng: '456'}
const INVALID_GEO_CODE_1: any = {lat: '123'}
const INVALID_GEO_CODE_2: any = {lng: '456'}
const INVALID_GEO_CODE_3: object = {}
const INVALID_GEO_CODE_4: number = 5
const INVALID_GEO_CODE_5: string = 'test'
const INVALID_GEO_CODE_6: any = null
const INVALID_GEO_CODE_7: any = undefined


describe('Testing validation of geo code', () => {
    test('Valid geo code', () => {
        expect(isValidGeoCode(VALID_GEO_CODE)).toBe(true)
    })

    test('Invalid geo code', () => {
        expect(isValidGeoCode(INVALID_GEO_CODE_1)).toBe(false)
        expect(isValidGeoCode(INVALID_GEO_CODE_2)).toBe(false)
        expect(isValidGeoCode(INVALID_GEO_CODE_3)).toBe(false)
        expect(isValidGeoCode(INVALID_GEO_CODE_4)).toBe(false)
        expect(isValidGeoCode(INVALID_GEO_CODE_5)).toBe(false)
        expect(isValidGeoCode(INVALID_GEO_CODE_6)).toBe(false)
        expect(isValidGeoCode(INVALID_GEO_CODE_7)).toBe(false)
    })
})
