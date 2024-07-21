import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
`;

export const Error = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;
