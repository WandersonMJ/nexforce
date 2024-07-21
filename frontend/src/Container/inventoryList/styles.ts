import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60%;

  max-width: 508px;
`;

export const RowCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray};
    padding: 16px 44px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 100px;
    max-width: 500px;
  `}
`;

export const NameAndCategory = styled.div`
  ${() => css`
    font-size: 16px;
    margin-bottom: 8px;

    display: flex;
    flex-direction: row;
    gap: 16px;

    span {
      font-weight: 600;
    }

    p:nth-child(1) {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p:nth-child(2) {
      flex: 1;
    }
  `}
`;

export const PriceAndStock = styled(NameAndCategory)``;

export const Error = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 14px;
  top: 20px;
  gap: 6px;
  display: flex;
  flex-direction: column;
`;
