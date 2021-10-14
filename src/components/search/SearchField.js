import React from 'react'
import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AppTextInput from '../common/AppTextInput'
import { WIDTH, Redious } from '../../config/Configure'

const SearchField = ({ ...otherProps}) => {
    return (
        <AppTextInput 
            style = {styles.inputfield}
            icon = {"ios-search"}
            placeholder = {"Search for orders"}
            {...otherProps}
         />
    )
}
const styles = StyleSheet.create({
    inputfield:{
        width: WIDTH,
        borderRadius: Redious,
        marginVertical: hp(2.5),
    },
});

export default SearchField
