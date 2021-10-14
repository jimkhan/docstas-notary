import React from 'react'
import { View, Text, Button } from 'react-native'

const DetailsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Details Screen</Text>
            <Button title={"Go to details"} onPress={()=> navigation.navigate("HomeScreen")} />
        </View>
    )
}

export default DetailsScreen
