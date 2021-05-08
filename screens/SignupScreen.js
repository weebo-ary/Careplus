import React from 'react'
import { View, Text, Button } from 'react-native'

const SignupScreen = () => {
    return (
        <View>
            <Text>SignUp</Text>
            <Button 
                title = 'Click Here'
                onPress = {() => alert ('Button Clicked')}
            />
        </View>
    )
}

export default SignupScreen;
