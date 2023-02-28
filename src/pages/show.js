import { Form, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function Show() {
  const contact = useLoaderData();
  return (
    <section>
      <h1>{contact.companyName}</h1>
      <h1>{contact.person}</h1>
      <h1>{contact.personTitle}</h1>
      <h1>{contact.emailAddress}</h1>
      <h1>{contact.usState}</h1>
      <h2>Update Contact</h2>
      <Form action={`/update/${contact.id}`} method="POST">
        <input
          type="text"
          name="companyName"
          defaultValue={contact.companyName}
        />
        <input type="text" name="person" defaultValue={contact.person} />
        <input
          type="text"
          name="personTitle"
          defaultValue={contact.personTitle}
        />
        <input
          type="text"
          name="emailAddress"
          defaultValue={contact.emailAddress}
        />
        <input type="text" name="usState" defaultValue={contact.usState} />
        <button> Update Contact</button>
      </Form>
      <Form action={`/delete/${contact.id}`} method="POST">
        <button>Delete Contact</button>
      </Form>
      <Link to="/">Back To Main Page</Link>
    </section>
  );
}
export default Show;
