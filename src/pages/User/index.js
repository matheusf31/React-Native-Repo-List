import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function User(props) {
  const { route } = props;

  const { user } = route.params;

  console.tron.log(user);

  return <View />;
}
