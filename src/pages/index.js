import { useLoaderData, Link } from "react-router-dom";

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
    </div>
  );
}

export default Index;
