import {AddressType, GeoCodeType} from "../../types/type_address";

export const MOCK_GEOCODES: GeoCodeType[] = [
    {
        lat: "12",
        lng: "34"
    },
    {
        lat: "56",
        lng: "78"
    },
    {
        lat: "90",
        lng: "12"
    }
]

export const MOCK_ADDRESSES: AddressType[] = [
    {
        street: "street_A",
        suite: "suite_A",
        city: "city_A",
        zipcode: "zipcode_A",
        geo: MOCK_GEOCODES[0]
    },
    {
        street: "street_B",
        suite: "suite_B",
        city: "city_B",
        zipcode: "zipcode_B",
        geo: MOCK_GEOCODES[1]
    },
    {
        street: "street_C",
        suite: "suite_C",
        city: "city_C",
        zipcode: "zipcode_C",
        geo: MOCK_GEOCODES[2]
    }
]