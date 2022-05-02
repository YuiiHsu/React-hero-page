import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 2px solid black;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const HeroCard = styled.div`
  margin: 10px;
  border: 2px solid;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const HeroImg = styled.img`
  margin: 10px;
  border: 2px solid;
`;
