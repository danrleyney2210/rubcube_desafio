import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 45px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(AntDesign).attrs(({ theme }) => ({
  name: "left",
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
