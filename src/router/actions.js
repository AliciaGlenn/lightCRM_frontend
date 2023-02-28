import { redirect } from "react-router-dom";
import URL from "./baseurl";

export const createAction = async ({ request }) => {
  const formData = await request.formData();

  const newContact = {
    companyName: formData.get("companyName"),
    person: formData.get("person"),
    personTitle: formData.get("personTitle"),
    emailAddress: formData.get("emailAddress"),
    usState: formData.get("usState"),
  };

  await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newContact),
  });

  return redirect("/");
};

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();

  const updateContact = {
    companyName: formData.get("companyName"),
    person: formData.get("person"),
    personTitle: formData.get("personTitle"),
    emailAddress: formData.get("emailAddress"),
    usState: formData.get("usState"),
  };

  await fetch(URL + `${params.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateContact),
  });

  return redirect("/");
};

export const deleteAction = async ({ params }) => {
  await fetch(URL + `${params.id}/`, {
    method: "DELETE",
  });

  return redirect("/");
};
