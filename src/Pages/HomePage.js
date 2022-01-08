import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {socialIcons} from '../utilits/icons';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, i am <span>Aleksandr Serdyuk</span>
        </h1>
        <p className="h-sub-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dicta impedit ipsam molestiae nam neque placeat rem similique.
          Animi eveniet facere numquam quod totam vero vitae. Aliquid aut in quo sit.
        </p>
        <div className="icons">
          {
            socialIcons.map((icon) => (
              <Link to={icon.link} className="icon-holder" key={icon.name}>
                <FontAwesomeIcon icon={icon.name} className={`icon ${icon.class}`}/>
              </Link>
              )
            )
          }
        </div>
      </header>
    </div>
  );
}

export default HomePage;
