import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./Contacts.css";
import LeftColumn from "../../components/LeftColumn/LeftColumn";
import RightColumn from "../../components/RightColumn/RightColumn";

const Contacts = ({ history }) => {
  const [isLoggedIn] = useState(sessionStorage.isLoggedIn === "true");
  const [token] = useState(localStorage.token);
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState([]);

  useEffect(() => {
    const dynamicSort = (property) => (a, b) =>
      a[property].localeCompare(b[property]);

    let url;
    if (process.env.NODE_ENV === "production") {
      url = "https://admiring-borg-6dec5e.netlify.app/contacts";
    } else {
      url = "http://localhost:3001/contacts";
    }

    const fetchData = async () => {
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.name) history.push("/");
      else setContacts(res.data.sort(dynamicSort("name")));
    };
    fetchData();
  }, [token, history]);

  useEffect(() => {
    setSelectedContact(contacts[0]);
  }, [contacts]);

  const selectContact = (id) => {
    setSelectedContact(contacts.filter((contact) => contact.id === id)[0]);
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="Contacts">
          <LeftColumn contacts={contacts} selectContact={selectContact} />
          <RightColumn
            contacts={contacts}
            selectContact={selectContact}
            selectedContact={selectedContact}
          />
        </div>
      ) : (
        history.push("/")
      )}
    </>
  );
};

export default withRouter(Contacts);
