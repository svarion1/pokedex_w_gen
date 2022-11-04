import { Image, StyleSheet, Text, View,  } from 'react-native'
import React, { useEffect, useCallback, useMemo } from 'react'
import Tag from '../atoms/Tag'

const PokeCard = ({number}) => {

    return (
      <View style={{...styles.card, backgroundColor: "#ffffff"}}>
        <View>
  
          <Text style={styles.subtitle}>#{number}</Text>
          <Text style={styles.title}>{number}</Text>
          <View style={styles.row}>
             <Tag type="bug"/>
              <Tag type="grass"/>
          </View>
  
        </View>
        <View style={styles.imageContainer}>
          <Image source={{uri:`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`}} style={styles.image}/>
        </View>
      </View>
    )
  }
  
  export default Card