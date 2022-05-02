import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as reducer from "../../../model/reducer";
import { IHero } from '../type';
import * as style from './style';

const HeroList = (props: IHero[]) => {
	const dispatch = useDispatch();

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
					<style.HeroCard
						key={hero.id}
						onClick={() => clickHeroCard(hero.id)}>
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
