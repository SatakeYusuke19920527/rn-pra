import { AntDesign } from '@expo/vector-icons';
import React, { FC } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import tw from 'tailwind-rn';

type Props = {
  name: any;
  color: string;
  size: number;
  onPress: (e: GestureResponderEvent) => void;
};

export const IconButton: FC<Props> = ({ color, size, onPress, name }) => (
  <TouchableOpacity style={tw('items-center')} onPress={onPress}>
    <AntDesign name={name} size={size} color={color} />
  </TouchableOpacity>
);
