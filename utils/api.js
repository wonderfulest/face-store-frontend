import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
        },
    };
    // console.log("[GET] data from api");
    // console.log(`${API_URL}${endpoint}`, options);

    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();

    return data;
};

export const makePostRequest = async (endpoint, payload) => {
    
    // console.log("[POST] makePostRequest data from api");
    // console.log(`${API_URL}${endpoint}`, options);

    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
   
    const data = await res.json();
    return data;
};
