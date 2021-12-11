import * as React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function Screen1({navigation}) {
  return (
    <View style={{flex:1}}>

      <LinearGradient style={{flex:1,alignItems:"center",justifyContent:"center"}}
        colors={['#085467', '#afa7bb', '#F4C3B3']}>
        
      <Text>Screen 1</Text> 
              <TouchableOpacity
                        onPress={() => navigation.navigate('S2')}
                    >
                        <Text style={{ color: "white", alignItems: "center" }}>Next</Text>
                        <Text style={{width:300}}>the theory which explain the behaweir and arrangement of three state of metal </Text>
                    </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}