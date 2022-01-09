import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Title';
import {contacts} from '../utilits/contacts';

function ContactsPage() {
  return (
    <div>
      <div className="c-title">
        <Title title={'My Contacts'} span={'My Contacts'}/>
      </div>
      <div className="ContactsPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4903.163762747203!2d23.666028572287008!3d52.08734088747337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210bbe18855555%3A0xa9f9ac3ce05856b7!2sBrestskaya%20Krepost&#39;.%20Zvezda!5e0!3m2!1sen!2sby!4v1641724392897!5m2!1sen!2sby"
            width="600" height="450" frameBorder="0" style={{border: 0}} allowFullScreen="" loading="lazy" tabIndex="0">
          </iframe>
        </div>
        <div className="contact-sect">
          {
            contacts.map(({ name, title, text2, text1 }) =>
              <ContactItem
                icon={name}
                text1={text1}
                text2={text2}
                title={title}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
