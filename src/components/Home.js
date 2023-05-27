import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css"
const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10; 
  const navigate = useNavigate();
  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://randomuser.me/api/?results=${pageSize}&page=${page}`);
      const data = await response.json();
      setContacts((prevContacts) => [...prevContacts, ...data.results]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []); 

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      
      if (!loading) {
        setLoading(true);
        setTimeout(() => {
          fetchContacts();
        }, 1000);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const logout=(e)=>{
    e.preventDefault();
    localStorage.removeItem('login');
    navigate('/')

  }

  return (
    <div>
        <div class="container1">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">FacePrep</a>
      </div>
      <button className='logout12' onClick={logout}>Logout</button>
    </nav>
    </div>
    
      <ul className='list'>
        {contacts.map((contact, index) => (
          <li key={index}>
            <ul >
            <li className='item'>
             <div className='picture'>
            <img src={contact.picture.thumbnail} alt="User Thumbnail" />
            </div>
            <div className='info'>
            <h1 className='name'>Name : {`${contact.name.first} ${contact.name.last}`}</h1>
            <h1 className='name'>Gender : {`${contact.gender}`}</h1>
            <h1 className='name'>Address :{`${contact.location.street.number} ${contact.location.street.name} `}</h1>
            <h1 className='name'>Email : {`${contact.email}`}</h1>
            <h1 className='name'>Username : {`${contact.login.username}`}</h1>
            <h1 className='name'>Date of Birth : {`${contact.dob.date}`}</h1>
            <h1 className='name'>Age : {`${contact.dob.age}`}</h1>
            <h1 className='name'>Phone Number : {`${contact.phone}`}</h1>
            </div>
            </li>
            </ul>
          </li>
          
        ))}
      </ul>
      {loading && <p>Loading...</p>}
  
    </div>
  );
};

export default ContactList;
