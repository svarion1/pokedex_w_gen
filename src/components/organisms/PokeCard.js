import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native'
import React, { useEffect, useCallback, useMemo } from 'react'


const PokeCard = ({number, name}) => {
    
    number = number.toString().padStart(3, '0')
    const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`


    console.log(number)

    return (
        <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>{name}</Text>
                
        
        </TouchableOpacity>
    )
  }
  

  export default PokeCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


})