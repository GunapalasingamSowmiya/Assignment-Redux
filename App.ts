import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screen/WelcomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import HomeScreen from './src/screen/HomeScreen';
import RootNavigation from './src/navigation/RootNavigation';


export default function App() {
  return (
    //  <WelcomeScreen/>
    // <LoginScreen/>
    // <HomeScreen/>
    <RootNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
