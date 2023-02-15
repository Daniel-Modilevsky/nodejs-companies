import {GeoCodeType} from "../types/type_address";

export function isValidGeoCode(geoCode: any): geoCode is GeoCodeType{
    return ( geoCode !== null &&
        typeof geoCode === 'object' &&
        Object.keys(geoCode).length === 2 &&
        Object.keys(geoCode).includes('lat') &&
        Object.keys(geoCode).includes('lng') &&
        typeof geoCode.lat === 'string' &&
         typeof geoCode.lng === 'string' &&
        geoCode.lat.length > 0 &&
        geoCode.lng.length > 0 &&
        !!parseFloat(geoCode.lat) &&
        !!parseFloat(geoCode.lng)
    )
}