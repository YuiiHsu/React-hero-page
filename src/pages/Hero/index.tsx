import React, { useEffect, useState } from 'react';
import HeroList from './HeroList';
import HeroProfile from './HeroProfile';
import { useSelector, useDispatch } from 'react-redux';
import * as reducer from "../../model/reducer";
import { RootState } from '../../model/store';
import { stateType } from 'model/type';
import { useLocation } from 'react-router-dom';
import { path } from '../../routes/path';
import { getHeros } from '../../apis/hero';
import { IHero } from './type';
import * as style from './style';

const Hero = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const [heros, setHeros] = useState<IHero[]>([]);
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
		getHeros().then(data =>
			setHeros(data)
		);
		checkUrlHeroId();
	}, []);

	return (
		<style.Container>
			<style.Content>
				<HeroList
					heros={heros}
					state={heroState} />
				{
					heroState.openProfilePage && <HeroProfile {...heroState.heroId} />
				}
			</style.Content>
		</style.Container>
	);
};

export default Hero;
