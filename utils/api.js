import { API_URL, STRAPI_API_TOKEN } from "./urls";


export const fetchDataFromApi = async (endpoint) => {
    const baseUrl = API_URL;
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
        },
    };
    console.log("[GET] data from api", endpoint);
    console.log(`${baseUrl}${endpoint}`, options);

    try {
        const res = await fetch(`${baseUrl}${endpoint}`, options);
        console.log("333333 res", res);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

export const makePostRequest = async (endpoint, payload) => {
    const baseUrl = API_URL;

    const res = await fetch(`${baseUrl}${endpoint}`, {
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
