import request from './request';

/**
 * 取得 Hero 清單
 */
export async function getHeros() {
	return await request.get(
		'/heroes'
	).then((response) => {
		return response.data;
	}).catch(
		error => alert(error)
	);
};

/**
 * 取得 Hero 屬性表
 * @param heroId Hero Id
 * @returns 該 Hero 的屬性表
 */
export async function getHeroProfile(heroId: string) {
	return await request.get(
		`/heroes/${heroId}/profile`
	).then((response) => {
		return response.data;
	}).catch(
		error => alert(error)
	);
};

/**
 * 更新 Hero 屬性表
 * @param heroId Hero Id
 * @param params 屬性物件
 */
export async function patchHeroProfile(heroId: string, params: object) {
	return await request.patch(
		`/heroes/${heroId}/profile`,
		params
	).then((response) => {
		return response.data;
	}).catch(
		error => alert(error)
	);
}
