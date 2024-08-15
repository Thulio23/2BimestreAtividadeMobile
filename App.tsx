
import { StatusBar } from 'expo-status-bar';
import { Navigation } from './src/navigation';
import { AuthProvider } from './src/context/auth';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <StatusBar style='auto' />
    </>
  )
}