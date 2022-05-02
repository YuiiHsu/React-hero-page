import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 2px solid;
  margin-top: 30px;
  display: flex;
`;

export const Attributes = styled.div`
  padding: 30px 50px;
  width: 40%;
`;

export const AttributeItem = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content space-between;
`;

export const AttributesTitle = styled.label`
  font-size: 25px;
`;

export const AdjustContent = styled.div`
  display: flex;
  border: 2px solid green;
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
`;

export const confirmContent = styled.div`
  padding: 30px 50px;  
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const RemainingPoints = styled.p`
  font-size: 15px;
`;

export const confirmBtn = styled.button`
  width: 150px;
  height: 40px;
`;
