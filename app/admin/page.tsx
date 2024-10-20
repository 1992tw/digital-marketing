// app/admin/page.tsx

"use client"; // This needs to be a client component

import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // Import your auth context

// Define the Contact interface
interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const AdminPage = () => {
  const { isAuthenticated } = useAuth(); // Now this will work
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      window.location.href = '/login'; // Adjust the path to your login page
    } else {
      // Fetch contacts data if authenticated
      fetchContacts();
    }
  }, [isAuthenticated]);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contact'); // Adjust to your API route
      const data = await response.json();
      if (data.success) {
        setContacts(data.data); // Assuming data.data is of type Contact[]
      } else {
        console.error('Failed to fetch contacts:', data.error);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      {isAuthenticated ? (
        <div>
          <h2>Contacts:</h2>
          <ul>
            {contacts.map((contact) => (
              <li key={contact._id}>
                <strong>Name:</strong> {contact.name}<br />
                <strong>Email:</strong> {contact.email}<br />
                <strong>Phone:</strong> {contact.phone}<br />
                <strong>Message:</strong> {contact.message}<br />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please log in to view contacts.</p>
      )}
    </div>
  );
};

export default AdminPage;
