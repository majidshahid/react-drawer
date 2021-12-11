// import * as React from 'react';
// import { StyleSheet, Text, View ,Image,TouchableOpacity,SafeAreaView} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Screen1 from './DRAWER SCREEN/Screen1';
// import Screen2 from './DRAWER SCREEN/Screen2';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// const Stack = createNativeStackNavigator();
// export default function app() {
//   return (
 
//     <View style={{flex:1}}>

//       <LinearGradient style={{flex:1}}
//         colors={['#085467', '#afa7bb', '#F4C3B3']}>
//          <NavigationContainer>
//       <Stack.Navigator initialRouteName="S2" >
//         <Stack.Screen name="S1" component={Screen1} />
//         <Stack.Screen name="S2" component={Screen2} />
//       </Stack.Navigator>
//     </NavigationContainer>
//       </LinearGradient>
//     </View> 
//   );

// }

import * as React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Screen1 from './DRAWER SCREEN/Screen1';
import Screen2 from './DRAWER SCREEN/Screen2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function app() {
  return (
 
    <View style={{flex:1}}>

      <LinearGradient style={{flex:1}}
        colors={['#085467', '#afa7bb', '#F4C3B3']}>
         {/* <NavigationContainer>
      <Stack.Navigator initialRouteName="S2" >
        <Stack.Screen name="S1" component={Screen1} />
        <Stack.Screen name="S2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer> */}
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="screen 1" component={Screen1} />
        <Drawer.Screen name="screen 2" component={Screen2} />
      </Drawer.Navigator>
    </NavigationContainer>
      </LinearGradient>
    </View> 
  );
}

