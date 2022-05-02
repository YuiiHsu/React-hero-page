import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 2px solid;
  margin-top: 30px;
  display: flex;
`;

export const Attributes = styled.div`
  padding: 10%;
  width: 40%;
`;

export const AttributeItem = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content space-between;
`;

export const AttributesTitle = styled.div`
  font-size: 25px;
  display: block;
  min-width: 60px;
  color: red;
`;

export const AdjustContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PlusAndMinusBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  font-size: 15px;
`;

export const AttributeItemValue = styled.span`
  font-size: 25px;
  margin: 0 20px;
  width: 30px;
`;

export const confirmContent = styled.div`  
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-left: 5%;
  width: 30%;
`;

export const RemainingPoints = styled.p`
  font-size: 15px;
`;

export const confirmBtn = styled.button`
  height: 40px;
  ${props => props.disabled && `opacity: 0.5`};
`;
