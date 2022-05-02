import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as reducer from "../../model/reducer";
import { IHero } from './type';
import * as style from './style';

const HeroList = () => {
  const dispatch = useDispatch();
  const [heros, setHeros] = useState<IHero[]>([
    {
      id: '1',
      name: "Daredevil",
      image: "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"
    },
    {
      id: "2",
      name: "Thor",
      image: "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"
    },
    {
      id: "3",
      name: "Iron Man",
      image: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"
    },
    {
      id: "4",
      name: "Hulk",
      image: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg"
    }
  ]);

  function clickHeroCard(heroId: string) {
    dispatch(reducer.actions.openProfilePage(true));
    dispatch(reducer.actions.setHeroId(heroId));
  }

  return (
    <style.Container>
      {heros.map(hero => {
        return (
          <style.HeroCard key={hero.id} onClick={() => clickHeroCard(hero.id)}>
            <Link to={hero.id} >
              <style.HeroImg src={hero.image} alt="Hero Image" />
              <h3>{hero.name}</h3>
            </Link>
          </style.HeroCard>
        );
      })}
    </style.Container >
  );
};

export default HeroList;
