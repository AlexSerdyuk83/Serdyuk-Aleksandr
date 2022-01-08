import React from 'react';
import about from '../img/about-main.jpg';

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="about photo"/>
      </div>
      <div className="about-info">
        <h4>I'm <span>Aleksandr Serdyuk</span></h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aspernatur blanditiis dolor doloribus fugit, in iste nemo non
          nulla quasi qui, ratione velit veritatis vero? Asperiores at
          atque blanditiis dolor excepturi, facere laborum neque obcaecati
          odio odit optio praesentium provident, quos ratione, reiciendis
          repellat repellendus repudiandae sed ut veritatis voluptatem voluptatibus.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Higher education</p>
            <p>Specialization</p>
            <p>Qualification</p>
            <p>Working now</p>
            <p>Held post</p>
          </div>
          <div className="right-section">
            <p>Aleksandr Serdyuk</p>
            <p>38</p>
            <p>Russian</p>
            <p>Russian (Native), English (A2)</p>
            <p>Brest, Belarus</p>
            <p>Reshetnev Siberian State University of Science and Technology, '06</p>
            <p>Rocket science</p>
            <p>Design Engineer</p>
            <p>Owls group, Minsk, Belarus</p>
            <p>Frontend developer</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
