import React from 'react'
import { TextInputProps } from 'react-native'
import * as S from './styles'
import { useTheme } from 'styled-components/native'

export const Input = ({ ...rest }: TextInputProps) => {
  const { COLORS } = useTheme();

  return (
    <S.Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}

