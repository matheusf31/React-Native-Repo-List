import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.14' })
    .useReactNative()
    .connect();

  console.tron = tron;

  // limpa a timeline sempre que damos um refresh
  tron.clear();
}
