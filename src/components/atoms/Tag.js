import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles from "../../styles/commonStyles";
import { colors, textColor } from '../../theme/colors';
import typesConfig from '../assets/typesConfig'
import { SvgXml } from 'react-native-svg';
import Icon from './Icon'

const test = typesConfig.typeIcon.bug

const Tag = ({type}) => {
  return (
    <View style={{...styles.tag, backgroundColor: colors[type], flexDirection:"row"}}>
      <Icon><SvgXml xml={typesConfig.typeIcon[type]} width="12" height="12" style={{margin:2, padding: 10, color: "white"}}/></Icon>
      <Text style={{color: textColor.white,textTransform:"capitalize", padding: 5}}>{type}</Text>
    </View>
  )
}

export default Tag
