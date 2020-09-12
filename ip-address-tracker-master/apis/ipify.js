// JSON response
// search address = `${res.ip} || ${res.as.domain}`
// ip address = `${res.ip}`
// location (city/town, initials_of_region_or_state_or_province postal_code)
// = `${res.location.city}, ${res.location.region} ${res.location.postalCode}`
// timezone = `UTC ${res.location.timezone}`
// isp = `${res.isp}`
// latitude = ${res.location.lat}
// longitude = ${res.location.lng}

// API
const BASE_API_URL = "https://geo.ipify.org/api/v1?";
const API_KEY = "at_lhmCp7cU9Fc19fs3pStvJLPhMsMq0";
export let ipifyApiURLWithKey = `${BASE_API_URL}&apiKey=${API_KEY}`;
