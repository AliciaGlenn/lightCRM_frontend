import URL from "./baseurl";

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
