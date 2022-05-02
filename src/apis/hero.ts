import request from './request';
/**
 * 取得 Hero 清單
 */
export async function getHeros() {
	return request.get(
		'/heroes'
	).then((response) => {
		return response.data;
	})
		.catch(
			// TODO 錯誤訊息顯示
		);
};
