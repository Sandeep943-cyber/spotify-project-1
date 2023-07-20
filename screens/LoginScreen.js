import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

const LoginScreen = () => {
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
        <SafeAreaView>
            <View style={{ height: 80 }} />
            <Entypo style={{ textAlign: "center" }} name="spotify" size={80} color="white" />
            <Text
            style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          Millions of Songs Free on spotify!
        </Text>
         </SafeAreaView>
    </LinearGradient>
  )
};

export default LoginScreen

const styles = StyleSheet.create({})