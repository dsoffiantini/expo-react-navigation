import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import ScreenOne from '@/components/ScreenOne';
import ScreenTwo from '@/components/ScreenTwo';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Tabs = createMaterialBottomTabNavigator()

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs.Navigator>
        <Tabs.Screen name="One" component={ScreenOne} />
        <Tabs.Screen name="Two" component={ScreenTwo} />
      </Tabs.Navigator>
    </ThemeProvider>
  );
}
