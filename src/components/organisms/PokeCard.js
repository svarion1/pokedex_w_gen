import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native'
import React, { useEffect, useCallback, useMemo } from 'react'
import Tag from '../atoms/Tag'
import { backgroundColors } from '../../theme/colors'
import { LinearGradient } from 'react-native-svg'


const getDetails = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const PokeCard = ({number, name, url, navigation}) => {
    const [pokemon, setPokemon] = React.useState({});
    const [mainType, setMainType] = React.useState("");
    const [secondaryType, setSecondaryType] = React.useState("");

    number = number.toString().padStart(3, '0')
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`

    useEffect(() => {
        getDetails(url).then((data) => {
            setPokemon(data)
            setMainType(data.types[0].type.name)
            if(data.types.length > 1) {
                setSecondaryType(data.types[1].type.name)
            }
        })  
    }, [])

    return (
        <TouchableOpacity style={{...styles.container, backgroundColor: backgroundColors[mainType]}} onPress={()=>{navigation.navigate("PokeDetail", {data:{pokemon}, image:{imageUrl}})}}> 
            <View style={{ padding:10, justifyContent:"center"}}>
                <Text style={styles.textNumber}>#{number}</Text>
                <Text style={styles.text}>{name}</Text>
                <View style={{flexDirection:"row"}}>{pokemon.types && pokemon.types.map((item) => { return <Tag type={item.type.name}/>})}</View>
            </View>
            <View style={{flex:1, alignItems:"flex-end"}}>
                <Image source={{uri: imageUrl}} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
  }
  

  export default PokeCard

const styles = StyleSheet.create({
    container: {
        marginHorizontal:10,
        marginVertical: 5,
        height: 150,
        flexDirection: "row",
        borderRadius:25,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 80% 100%)",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        textTransform: "capitalize",
    }, 
    textNumber: {
        fontSize: 18,
        color: "#000",
    },
    
    image: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    }, 
    typeGradient: {
        position: "absolute",
        top: 0,
        left: 0,
    }


})