import React from 'react';
import { settingProfile } from '../../type';
import * as style from './style';

const SettingProfile = (props: settingProfile) => {
	const actionType = {
		plus: '+',
		minus: '-'
	};

	/**
	 * 處理加減的動作
	 * @param key 當前操作的屬性
	 * @param action 加 / 減
	 */
	function handlePlusAndMinus(key: string, action: string) {
		const attributes = { ...props.heroAttributes };

		if (action === actionType.plus) {
			if (props.usedPoint + 1 > props.totalPoint) {
				return false;
			}

			attributes[key]++;
			props.setUsedPoint(props.usedPoint + 1);
		} else if (action === actionType.minus) {
			if (attributes[key] <= 0) {
				return false;
			}

			attributes[key]--;
			props.setUsedPoint(props.usedPoint - 1);
		}

		props.setHeroAttributes(attributes);
	}

	return <style.Attributes>
		{
			Object.keys(props.heroAttributes).map(function (key) {
				return <style.AttributeItem key={key}>
					<style.AttributesTitle>
						{key?.toUpperCase()}
					</style.AttributesTitle>
					<style.AdjustContent>
						<style.PlusAndMinusBtn
							disabled={props.heroAttributes[key] < 1}
							onClick={() => handlePlusAndMinus(key, actionType.minus)}>
							-
						</style.PlusAndMinusBtn>
						<style.AttributeItemValue>
							{props.heroAttributes[key]}
						</style.AttributeItemValue>
						<style.PlusAndMinusBtn
							disabled={props.usedPoint + 1 > props.totalPoint}
							onClick={() => handlePlusAndMinus(key, actionType.plus)}>
							+
						</style.PlusAndMinusBtn>
					</style.AdjustContent>
				</style.AttributeItem>;
			})
		}
	</style.Attributes>;
};

export default SettingProfile;
