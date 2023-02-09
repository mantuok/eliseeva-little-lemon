import React from 'react';

const Contacts = () => {
  return (
    <section className="contacts">
      <address>
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li><a href="tel: 111-111-111111">111-111-111111</a></li>
          <li><a href="mailto:webmaster@example.com">Send us an email</a></li>
        </ul>
      </address>
      <div>
        <h3>Social Media</h3>
        <ul>
          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Contacts;