import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 300px;

  position: relative;

  @media screen and (max-width: 440px) {
    max-width: unset;
  }
`;

export const StyledInput = styled.input`
  padding: 10px 50px 10px 10px;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  width: 100%;
  border-color: ${({ theme }) => theme.colors.Realblack};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.purple};
  }
`;
