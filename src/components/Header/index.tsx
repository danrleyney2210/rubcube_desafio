import React from 'react'
import * as S from './styles'
import { StatusBar } from 'expo-status-bar'
import { Cube } from "phosphor-react-native";
import { useNavigation } from '@react-navigation/native';


type props = {
  showButton?: boolean
}

export const Header = ({ showButton = false }: props) => {
  const { goBack } = useNavigation()
  const handleBack = () => {
    goBack()
  }

  return (
    <S.Container>
      {
        showButton &&
        <S.BackButton onPress={handleBack}>
          <S.BackIcon />
        </S.BackButton>
      }

      <Cube size={32} color={'#fff'} />

      {/* <S.Logo source={logoImg} /> */}
    </S.Container>
  )
}

