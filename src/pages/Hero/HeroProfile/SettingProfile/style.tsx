import styled from 'styled-components';

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
color: #00FFBC;
`;

export const AdjustContent = styled.div`
display: flex;
flex-direction: row;
`;

export const PlusAndMinusBtn = styled.button`
width: 30px;
height: 30px;
font-size: 15px;
border-radius: 5px;
${props => props.disabled && `opacity: 0.5`};
`;

export const AttributeItemValue = styled.span`
font-size: 25px;
margin: 0 20px;
width: 30px;
text-align: right;
`;
