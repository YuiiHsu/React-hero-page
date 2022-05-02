import React, { useEffect, useRef, useState } from 'react';
import { patchHeroProfile, getHeroProfile } from '../../../apis/hero';
import SettingProfile from './SettingProfile';
import { attributesType } from '../type';
import * as style from './style';

const HeroProfile = (heroId: string) => {
	const [heroAttributes, setHeroAttributes] = useState<attributesType>({});
	const [totalPoint, setTotalPoint] = useState<number>(0);
	const [usedPoint, setUsedPoint] = useState<number>(0);

	/**
	 * 確認當前已使用的總點數
	 * @param attributes 各項指標的物件
	 * @returns 以使用的總點數
	 */
	function checkCurrentUsedPoint(attributes: attributesType) {
		return Object.values(attributes)
			.reduce((preSum, item) => preSum + item, 0);
	}

	/**
	 * 處理點擊儲存按鈕
	 */
	function handleConfirm() {
		patchHeroProfile(heroId[0], heroAttributes)
			.then(

			);
	}

	useEffect(() => {
		getHeroProfile(heroId[0]).then(response => {
			const sum = checkCurrentUsedPoint(response);
			setTotalPoint(sum);
			setUsedPoint(sum);
			setHeroAttributes(response);
		});
	}, [heroId]);

	return (
		<style.Container>
			<SettingProfile
				heroAttributes={heroAttributes}
				usedPoint={usedPoint}
				totalPoint={totalPoint}
				setUsedPoint={setUsedPoint}
				setHeroAttributes={setHeroAttributes} />
			<style.confirmContent>
				<style.RemainingPoints>
					剩餘點數: {totalPoint - usedPoint}
				</style.RemainingPoints>
				<style.confirmBtn
					disabled={usedPoint !== totalPoint}
					onClick={() => handleConfirm()}>
					儲存
				</style.confirmBtn>
			</style.confirmContent>
		</style.Container>
	);
};

export default HeroProfile;
