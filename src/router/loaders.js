//import URL from "./baseurl";

// YOUR DEPLOYED API BASE URL
const URL = "https://crm-backend-6894.onrender.com";

export const indexLoader = async () => {
  const response = await fetch(URL);
  const contacts = await response.json();
  return contacts;
};

export const showLoader = async ({ params }) => {
  const response = await fetch(URL + `${params.id}/`);
  const contacts = await response.json();
  return contacts;
};
