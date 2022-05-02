import { PayloadAction } from '@reduxjs/toolkit';
import { stateType } from './type';

const initState: stateType = {
	// Profile Page 開關
	openProfilePage: false,

	// 當前點擊的 Hero Id
	heroId: ''
};

export enum actionTypes {
	OPEN_PROFILE_PAGE = 'hero/OPEN_PROFILE_PAGE',
	SET_HERO_ID = 'hero/SET_HERO_ID'
};

export const heroReducer = (state: stateType = initState, action: PayloadAction<stateType>) => {
	switch (action.type) {
		case actionTypes.OPEN_PROFILE_PAGE:
			return { ...state, openProfilePage: action.payload };
		case actionTypes.SET_HERO_ID:
			return { ...state, heroId: action.payload };
		default:
			return state;
	}
};

export const actions = {
	openProfilePage: (openProfilePage: boolean) => ({ type: actionTypes.OPEN_PROFILE_PAGE, payload: openProfilePage }),
	setHeroId: (heroId: string) => ({ type: actionTypes.SET_HERO_ID, payload: heroId })
};
