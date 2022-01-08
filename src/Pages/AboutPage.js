import React from 'react';
import Title from '../Components/Title';
import ImageSection from './ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import {skills} from '../utilits/skills';
import {services} from '../utilits/services';

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={'About me'} span={'About me'}/>
      <ImageSection/>
      <Title title={'My Skills'} span={'My Skills'}/>
      <div className="skillsContainer">
        {
          skills.map(({name, progress, width}) => <SkillsSection skill={name} progress={progress} width={width}/>)
        }
      </div>
      <Title title={'Services'} span={'Services'}/>
      <div className="ServicesContainer">
        {
          services.map(({name, image, text}) =>
            <ServicesSection
              image={image}
              title={name}
              text={text}
            />
          )
        }
      </div>
    </div>
  );
}

export default AboutPage;
