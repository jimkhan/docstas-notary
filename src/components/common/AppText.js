import React from 'react'
import { Text, StyleSheet, } from 'react-native'

import { Colors, Spacing, FontSize} from '../../config/Configure'


const AppText = ({ children, style, ...otherProps }) => {
    return (

        <Text style={[styles.textcommon, style]} {...otherProps} >{children}</Text>
    )
}
const styles = StyleSheet.create({
    textcommon: {
        fontSize: FontSize.s,
        alignSelf: 'center',
        color: Colors.lightGray,
        // fontFamily: 'helvetica-neue-medium',
        fontFamily: 'helvetica-neue-bold',
    }
})

export default AppText;
