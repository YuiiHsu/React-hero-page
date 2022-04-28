import { PayloadAction } from '@reduxjs/toolkit';
import { heroListType } from './type';

const initState: heroListType = {
	list: [
		{
			id: 0,
			name: '',
			image: ''
		}
	]
};

export enum actionType {
	SET_HERO_LIST = 'SET_HERO_LIST'
};

export const heroReducer = (state: heroListType = initState, action: PayloadAction<heroListType>) => {
	switch (action.type) {
		case actionType.SET_HERO_LIST:
			return { ...state, heroList: action.payload };
		default:
			return state;
	}
};

export const actions = {
	setHeroList: (heroList: heroListType) => ({ type: actionType.SET_HERO_LIST, payload: heroList })
};
