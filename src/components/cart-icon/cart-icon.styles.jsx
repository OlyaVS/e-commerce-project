import styled from 'styled-components';
import { ReactComponent as Cart } from '../../assets/cart.svg';

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

export const CartIconElement = styled(Cart)`
  width: 24px;
  height: 24px;
`;

export const ItemsCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
