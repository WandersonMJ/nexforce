import React from 'react';
import { useForm, Controller, Control } from 'react-hook-form';
import * as S from './styles';

interface InputProps {
  'data-testid'?: string;
  placeholder: string;
  name: string;
  control: Control<any>;
  defaultValue: string;
  disabled: boolean;
}

const Input: React.FC<InputProps> = ({
  'data-testid': dataTestId,
  placeholder,
  name,
  control,
  defaultValue,
  disabled,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }: any) => (
        <S.InputWrapper>
          <S.StyledInput
            {...field}
            data-testid={dataTestId}
            placeholder={placeholder}
            disabled={disabled}
          />
        </S.InputWrapper>
      )}
    />
  );
};

export default Input;
