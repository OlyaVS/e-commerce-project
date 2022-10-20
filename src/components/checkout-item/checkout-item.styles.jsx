import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100px;
  border-bottom: 1px solid darkgray;
  padding: 15px 0;
  font-size: 20px;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h2`
  width: 23%;
  font-size: 16px;
  font-weight: lighter;
`;

export const Quantity = styled.span`
  width: 23%;
  font-size: 16px;
  font-weight: lighter;
  display: flex;
`;
export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const Price = styled.span`
  width: 23%;
  font-size: 16px;
  font-weight: lighter;
`;

export const RemoveButton = styled.button`
  padding-left: 12px;
  cursor: pointer;
`;
