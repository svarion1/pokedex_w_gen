import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const Icon = ({children, onPress, style}) => {
  return (
    <TouchableWithoutFeedback style={{...styles.icon, style}} onPress={onPress}>
        {children}    
    </TouchableWithoutFeedback>
  )
}

export default Icon

const styles = StyleSheet.create({
    icon: {
        paddingHorizontal: 10,
    }
})