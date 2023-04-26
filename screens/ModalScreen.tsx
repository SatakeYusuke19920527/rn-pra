import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from '../types/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Sample'>;
};

export const ModalScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>ModalScreen</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};
