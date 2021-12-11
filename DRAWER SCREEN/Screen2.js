import * as React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function Screen2({navigation}) {
  return (
    <View style={{flex:1}}>

      <LinearGradient style={{flex:1,alignItems:"center",justifyContent:"center"}}
        colors={['#085467', '#afa7bb', '#F4C3B3']}>
        
      <Text >Screen 2 </Text> 
      <TouchableOpacity
                        onPress={() => navigation.navigate('S1')}
                    >
                        <Text style={{ color: "white", alignItems: "center" }}>Back</Text>
                    </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}