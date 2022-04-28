type singoHeroType = {
	id: number,
	name: string,
	image: string
};

type heroListType = {
	list: Array<singoHeroType> | null
};

export type {
	singoHeroType,
	heroListType
};
