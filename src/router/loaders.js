import URL from "./baseurl";

export const indexLoader = async () => {
  const response = await fetch(URL + `/contacts/`);
  const contacts = await response.json();
  return contacts;
};

export const showLoader = async ({ params }) => {
  const response = await fetch(URL + `/contacts/${params.id}/`);
  const contacts = await response.json();
  return contacts;
};
