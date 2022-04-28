import React from 'react';
import { useSelector } from 'react-redux';
import { heroListType } from '../../model/type';
import { RootState } from '../../model/store';

const HeroList = () => {
  const heroState = useSelector((state: RootState) => state.hero);

  return (
    <h1>
      HeroList
    </h1>
  );
};

export default HeroList;
