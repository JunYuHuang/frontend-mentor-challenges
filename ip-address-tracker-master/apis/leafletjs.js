const BASE_API_URL = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?";
const API_KEY =
  "pk.eyJ1IjoibWVtZWxvcmQ2OSIsImEiOiJja2V5em52NzMwa2VzMnhwMzdpY3pwMHowIn0.sR6E7Bar4dD2fq2YbOdDDQ";
export let leafletjsApiURLWithKey = `${BASE_API_URL}access_token=${API_KEY}`;
