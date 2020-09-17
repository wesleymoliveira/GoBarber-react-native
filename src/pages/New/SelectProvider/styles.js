import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 20px;
  flex: 1;

  align-items: center;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  margin-top: 10px;
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const Name = styled.Text`
  margin: 15px 15px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
