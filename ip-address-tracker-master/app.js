import { ipifyApiURLWithKey } from "./apis/ipify.js";
import { leafletjsApiURLWithKey } from "./apis/leafletjs.js";

// DOM
const searchForm = document.querySelector(".form-group");
const searchFormTextInput = document.querySelector(".form-group__input__text");
const resultIPAddressContent = document.querySelector(
  ".info-display__item--ip-address"
);
const resultLocationContent = document.querySelector(
  ".info-display__item--location"
);
const resultTimeZoneContent = document.querySelector(
  ".info-display__item--timezone"
);
const resultISPContent = document.querySelector(".info-display__item--isp");

function updateDisplayInfo(
  resultIPAddress,
  resultLocation,
  resultTimeZone,
  resultISP
) {
  resultIPAddressContent.textContent = resultIPAddress;
  resultLocationContent.textContent = resultLocation;
  resultTimeZoneContent.textContent = resultTimeZone;
  resultISPContent.textContent = resultISP;
}

// CORS proxy server
let CORS_PROXY_SERVER_URL = "https://cors-anywhere.herokuapp.com/";

// Leafletjs Map API
// default map area is around "Brooklyn, NY 10001"
let myMap = L.map("mapid").setView([40.786, -74.005], 17);

L.tileLayer(leafletjsApiURLWithKey, {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 22,
  id: "mapbox/streets-v11",
  tileSize: 512,
  zoomOffset: -1,
}).addTo(myMap);

let locationIcon = L.icon({
  iconUrl: "./images/icon-location.svg",
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

let customMarker = L.marker([40.786, -74.005], { icon: locationIcon }).addTo(
  myMap
);

function updateMapAreaAndMarker(latitude, longitude) {
  myMap.panTo([latitude, longitude]);
  customMarker.setLatLng([latitude, longitude]);
}

// regex consts
const IPV4_REGEX = /^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/;
const IPV6_REGEX = /^([0-9A-Fa-f]{0,4}:){2,7}([0-9A-Fa-f]{1,4}$|((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4})$/;
const URL_DOMAIN_REGEX = /^(?!\-)(?:(?:[a-zA-Z\d][a-zA-Z\d\-]{0,61})?[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // only submit api request if entered ip address or domain is valid
  let searchTerm = searchFormTextInput.value;
  let isIPv4Address = IPV4_REGEX.test(searchTerm);
  let isIPv6Address = IPV6_REGEX.test(searchTerm);
  let isDomainURL = URL_DOMAIN_REGEX.test(searchTerm);

  if (isIPv4Address || isIPv6Address || isDomainURL) {
    let fullIpifyAPIURL = "";

    if (isDomainURL) {
      fullIpifyAPIURL = `${ipifyApiURLWithKey}&domain=${searchTerm}`;
    } else {
      fullIpifyAPIURL = `${ipifyApiURLWithKey}&ipAddress=${searchTerm}`;
    }

    fetch(`${CORS_PROXY_SERVER_URL}${fullIpifyAPIURL}`)
      .then((res) => res.json())
      .then((res) => {
        // update text info
        let ipAddress = res.ip;
        // location format doesn't match mock-ups but I'm too lazy to implement a full state/province to its abbreviation converter
        let location = `${res.location.city}, ${res.location.country} ${res.location.postalCode}`;
        let timezone = `UTC ${res.location.timezone}`;
        let isp = res.isp;
        updateDisplayInfo(ipAddress, location, timezone, isp);

        // update map area
        updateMapAreaAndMarker(res.location.lat, res.location.lng);
      })
      .catch((err) => console.log(err));
  } else {
    // enter user search term is empty or in a invalid format
    searchForm.classList.toggle("shake-horizontal");
    // shake the search form to indicate the entered input is invalid
    setTimeout(() => {
      searchForm.classList.toggle("shake-horizontal");
    }, 500);
  }

  // re-focus on search input
  searchFormTextInput.focus();
});
