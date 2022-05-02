import React, { useEffect, useRef, useState } from 'react';
import { patchHeroProfile, getHeroProfile } from '../../../apis/hero';
import { attributesType } from '../type';
import * as style from './style';

const HeroProfile = (heroId: string) => {
	const [heroAttributes, setHeroAttributes] = useState<attributesType>({});
	const [totalPoint, setTotalPoint] = useState<number>(0);
	const [usedPoint, setUsedPoint] = useState<number>(0);
	const actionType = {
		plus: "plus",
		minus: "minus"
	};

	/**
	 * 處理加減的動作
	 * @param key 當前操作的屬性
	 * @param action 加 / 減
	 */
	function handlePlusAndMinus(key: string, action: string) {
		const attributes = { ...heroAttributes };

		if (action === actionType.plus) {
			if (usedPoint + 1 > totalPoint) {
				return false;
			}

			attributes[key]++;
			setUsedPoint(usedPoint + 1);
		} else if (action === actionType.minus) {
			if (attributes[key] <= 0) {
				return false;
			}

			attributes[key]--;
			setUsedPoint(usedPoint - 1);
		}

		setHeroAttributes(attributes);
	}

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
			<style.Attributes>
				{
					Object.keys(heroAttributes).map(function (key) {
						return <style.AttributeItem key={key}>
							<style.AttributesTitle>
								{key?.toUpperCase()}
							</style.AttributesTitle>
							<style.AdjustContent>
								<style.PlusAndMinusBtn
									disabled={heroAttributes[key] < 1}
									onClick={() => handlePlusAndMinus(key, actionType.minus)}>
									-
								</style.PlusAndMinusBtn>
								<style.AttributeItemValue>
									{heroAttributes[key]}
								</style.AttributeItemValue>
								<style.PlusAndMinusBtn
									disabled={usedPoint + 1 > totalPoint}
									onClick={() => handlePlusAndMinus(key, actionType.plus)}>
									+
								</style.PlusAndMinusBtn>
							</style.AdjustContent>
						</style.AttributeItem>;
					})
				}
			</style.Attributes>

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
