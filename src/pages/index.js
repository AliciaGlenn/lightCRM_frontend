import { useLoaderData, Link, Form } from "react-router-dom";

function Index() {
  const contacts = useLoaderData();

  return (
    <div>
      <h1>My Contacts</h1>
      <ul>
        {contacts.map((contact) => (
          <Link to={`/${contact.id}`}>
            <li>{contact.companyName}</li>
          </Link>
        ))}
      </ul>
      <h2>Create a Contact</h2>
      <Form action="/create" method="post">
        <input type="text" name="companyName" placeholder="Company Name" />
        <input type="text" name="person" placeholder="Point of Contact" />
        <input type="text" name="personTitle" placeholder="Title" />
        <input type="text" name="emailAddress" placeholder="Email Address" />
        <input type="text" name="usState" placeholder="State" />
        <button> Create a Contact</button>
      </Form>
    </div>
  );
}

export default Index;
