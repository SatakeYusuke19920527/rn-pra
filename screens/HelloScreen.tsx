import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import tw from 'tailwind-rn';
import { RootStackParamList } from '../types/types';
type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;

const Hello: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    console.log('🚀 ~ file: FlexboxScreen.tsx:6 ~ Hello ~ mouted flexbox:');
    return () => {
      console.log('🚀 ~ file: FlexboxScreen.tsx:6 ~ Hello ~ unmouted flexbox:');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-50 items-center justify-center')}>
      <Text>HelloScreen</Text>
      <Button
        title="Go to FlexBox"
        onPress={() => navigation.navigate('FlexBox')}
      />
    </View>
  );
};

export default Hello;
