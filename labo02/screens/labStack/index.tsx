//todo: gebruik de stack navigator uit de docs
// toon een home screen
// voeg een button toe om naar detail te gaan
// toon de detail screen (nog leeg)
// voeg een button toe om terug te gaan naar home
// bekijk hoe je de header kan namaken zoals in het voorbeeld

//todo: hoe lang ga je hiermee bezig zijn...?

import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Detail from './Detail';

const Stack = createStackNavigator();

export function LabStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}