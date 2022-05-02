import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as reducer from "../../../model/reducer";
import { IHero } from '../type';
import { stateType } from "model/type";
import { RootState } from "model/store";
import * as style from './style';

const HeroList = (props: IHero[]) => {
	const dispatch = useDispatch();
	const heroState: stateType = useSelector((state: RootState) => state.hero);

	/**
	 * 處理點擊 Hero Card
	 * @param heroId 被點擊的 Hero Id
	 */
	function clickHeroCard(heroId: string) {
		dispatch(reducer.actions.openProfilePage(true));
		dispatch(reducer.actions.setHeroId(heroId));
	}

	return (
		<style.Container>
			{Object.values(props).map(hero => {
				return (
					hero.id === heroState.heroId
						? <style.SelectedHeroCard
							key={hero.id}
							onClick={() => clickHeroCard(hero.id)}>
							<Link to={hero.id} >
								<style.HeroImg src={hero.image} alt="Hero Image" />
								<style.HeroName>{hero.name}</style.HeroName>
							</Link>
						</style.SelectedHeroCard>
						: <style.HeroCard
							key={hero.id}
							onClick={() => clickHeroCard(hero.id)}>
							<Link to={hero.id} >
								<style.HeroImg src={hero.image} alt="Hero Image" />
								<style.HeroName>{hero.name}</style.HeroName>
							</Link>
						</style.HeroCard>
				);
			})}
		</style.Container >
	);
};

export default HeroList;
