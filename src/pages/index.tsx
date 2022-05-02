import React, { useEffect } from 'react';
import HeroList from './HeroList';
import HeroProfile from './HeroProfile';
import * as style from './style';
import { RootState } from '../model/store';
import { stateType } from 'model/type';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { path } from '../routes/path';
import * as reducer from "../model/reducer";

const Hero = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const heroState: stateType = useSelector((state: RootState) => state.hero);

  /**
   * 確認 URL 的 HeroId, 如果有就開啟 Profile Page
   */
  function checkUrlHeroId() {
    if (!heroState.heroId) {
      const urlHeroPath = location.pathname?.split(`/${path.heroes}/`);
      if (urlHeroPath[1]) {
        dispatch(reducer.actions.setHeroId(urlHeroPath[1]));
        dispatch(reducer.actions.openProfilePage(true));
      }
    }
  }

  useEffect(() => {
    checkUrlHeroId();
  }, []);

  return (
    <style.Container>
      <style.Content>
        <HeroList />
        {
          heroState.openProfilePage && <HeroProfile />
        }
      </style.Content>
    </style.Container>
  );
};

export default Hero;
