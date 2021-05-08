import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image , Button, TextInput, TouchableOpacityComponent, TouchableOpacityBase } from "react-native";
import Forminput from "../components/Forminput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";


const LoginScreen = ({navigation}) => {

      const [email, setEmail] = useState();
      const [password, setPassword] = useState();


  return (
    <View style={styles.container}>
    
      <Image
        source={require("../assets/images/ed264ec19993369ef2b7b01d98e8f4ec.png")}
        style={styles.logo}
      />

      <Forminput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="face-profile"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Forminput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
      />

      <TouchableOpacity style={[styles.forgotButton]} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("")}
      >
        <SocialButton
          buttonTitle="Sign In with Facebook"
          btnType="facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
        />

        <SocialButton
          buttonTitle="Sign In with Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
        />

        <TouchableOpacity
            style = {styles.forgotButton}
            onPress = {() => navigation.navigate('Signup')}>

            <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>

        </TouchableOpacity>


      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "white",
  },
  logo: {
    height: 230,
    width: 230,
    resizeMode: "cover",
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
});
