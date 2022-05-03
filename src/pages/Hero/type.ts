import { stateType } from "model/type"

export interface IHero {
	id: string,
	name: string,
	image: string
}

export interface attributesType {
	[key: string]: number
}

export interface settingProfile {
	heroAttributes: attributesType,
	usedPoint: number,
	totalPoint: number,
	setUsedPoint: any,
	setHeroAttributes: any
}

export interface heroListInput {
	heros: IHero[],
	state: stateType
}
