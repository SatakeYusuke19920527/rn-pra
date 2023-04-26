import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from '../types/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Sample'>;
};

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const openModal = () => {
    navigation.navigate('Modal');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Text>Sample Screen</Text>
      <Button title="modal test open" onPress={openModal} />
    </View>
  );
};
