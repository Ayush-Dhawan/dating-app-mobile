import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { AuthContextProvider } from './contexts/AuthContext';


export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </AuthContextProvider>
  );
}
