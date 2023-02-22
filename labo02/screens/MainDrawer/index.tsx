import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Overview from './Overview';
import Settings from './Settings';

const Drawer = createDrawerNavigator();

export function MainDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="0verview" component={Overview} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}