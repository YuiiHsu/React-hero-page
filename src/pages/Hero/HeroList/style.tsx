import styled from 'styled-components';

export const Container = styled.div`
  border: 3px solid #000000;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
	border-radius: 15px;
`;

export const HeroCard = styled.div`
  margin: 20px;
  border: 2px solid #02ABAF;
  text-align: center;
  display: flex;
  flex-direction: column;
	background: #211e1e;
	border-radius: 15px;
	box-shadow: 0 3px 15px 3px #000000;
	`;

export const SelectedHeroCard = styled.div`
  margin: 20px;
  border: 2px solid #FFFF00;
  text-align: center;
  display: flex;
  flex-direction: column;
	background: #211e1e;
	border-radius: 15px;
	box-shadow: 0 3px 15px 3px #FFFF00;
	`;

export const HeroImg = styled.img`
  margin: 10px;
  border: 2px solid;
  width: 150px;
  height: 150px;
	border: none;
	border-radius: 10px;
`;

export const HeroName = styled.h2`
  color: #00FFBC;
  text-decoration: none;
`;
