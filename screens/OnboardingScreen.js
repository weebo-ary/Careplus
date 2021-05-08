import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({navigation}) => {

    const Done = ({ ...props }) => (
      <Text {...props} style={{ marginRight: 15, fontSize: 16, fontWeight: "bold" }}
      >
        Done
      </Text>
    );

    return (
      <Onboarding
        DoneButtonComponent = {Done}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: "#a6e4d0",
            image: (
              <Image
                source={require("../assets/images/images-removebg-preview.png")}
                style={{ width: 200, height: 300, marginLeft: 50 }}
              />
            ),
            title: "Careplus",
            subtitle: "Keeps you Relax and Enigmatic",
          },
          {
            backgroundColor: "#fdeb93",
            image: (
              <Image
                source={require("../assets/images/8dd25d9051cbef9c3a4518b67a7abdf6-removebg-preview.png")}
                style={{ width: 350, height: 350, marginLeft: -20 }}
              />
            ),
            title: "Helping People",
            subtitle: "We are here to help you out Mentally",
          },
          {
            backgroundColor: "#e9bcbe",
            image: (
              <Image
                source={require("../assets/images/c08ff59eb4bab0dbdceded1d9bf5e9eb.png")}
                style={{ width: 350, height: 350, marginLeft: 20 }}
              />
            ),
            title: "Let's Go",
            subtitle: "Are you Ready for making yourself Charming Again ?",
          },
        ]}
      />
    );
}

export default OnboardingScreen;

const styles = StyleSheet.create  ({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
