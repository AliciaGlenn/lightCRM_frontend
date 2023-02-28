import URL from "./baseurl";

export const indexLoader = async () => {
  const response = await fetch(URL);
  const contacts = await response.json();
  return contacts;
};
