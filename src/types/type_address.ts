export type GeoCodeType = {
    lat: string,
    lng: string,
}

export type AddressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GeoCodeType
}