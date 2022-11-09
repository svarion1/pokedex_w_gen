import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, textColor } from '../../theme/colors';
import {typeIcon} from '../../utils/TypesConfig';
import { SvgXml } from 'react-native-svg';
import Icon from './Icon'


const Tag = ({type}) => {

  return (
    <View style={{...styles.tag, backgroundColor: colors[type], flexDirection:"row"}}>
      <Icon><SvgXml xml={typeIcon[type]} width="12" height="12" style={{margin:2, padding: 10, color: "white"}}/></Icon>
      <Text style={{color: textColor.white,textTransform:"capitalize", padding: 5}}>{type}</Text>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
  tag: {
    borderRadius: 10,
    padding: 5,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }
})
