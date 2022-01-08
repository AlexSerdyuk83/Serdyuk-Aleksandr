import React from 'react';
import Title from '../Components/Title';
import ImageSection from './ImageSection';
import SkillsSection from '../Components/SkillsSection';
import {skills} from '../utilits/skills';

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
    </div>
  );
}

export default AboutPage;
