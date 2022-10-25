import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 40px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
