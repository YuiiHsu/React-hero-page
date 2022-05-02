import React, { useState } from 'react';
import { attributesType } from './type';
import * as style from './style';

const HeroProfile = () => {
  const [heroAttributes, setHeroAttributes] = useState<attributesType>({
    str: 2,
    int: 7,
    agi: 9,
    luk: 7
  });

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
                <style.PlusAndMinusBtn>
                  -
                </style.PlusAndMinusBtn>
                <style.AttributeItemValue>
                  {heroAttributes[key]}
                </style.AttributeItemValue>
                <style.PlusAndMinusBtn>
                  +
                </style.PlusAndMinusBtn>
              </style.AdjustContent>
            </style.AttributeItem>;
          })
        }
      </style.Attributes>

      <style.confirmContent>
        <style.RemainingPoints>
          剩餘點數: 30
        </style.RemainingPoints>
        <style.confirmBtn>
          儲存
        </style.confirmBtn>
      </style.confirmContent>
    </style.Container>
  );
};

export default HeroProfile;
