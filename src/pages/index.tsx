import React from 'react';
import HeroList from './HeroList';
import HeroProfile from './HeroProfile';
import * as style from './style';

const Hero = () => {
  return (
    <style.Container>
      <HeroList />
      <HeroProfile />
    </style.Container>
  );
};

export default Hero;
