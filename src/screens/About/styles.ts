import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const contentImage = styled.View`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonImage = styled.Image`
  height: 150px;
  width: 150px;
`;

export const ContentText = styled.View`
  display: flex;
  flex-direction: columns;
  gap: 10px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Title = styled.Text`
  display: flex;
  width: 100%;
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`;
