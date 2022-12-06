import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import GenButton from '../../components/atoms/GenButton';
import CardButton from '../../components/molecules/CardButton';
import PokeCard from '../../components/organisms/PokeCard';


const GenerationDetail = ({route, navigation}) => {

  const {data} = route.params;

  
   
  return (
   <SafeAreaView style={{flex:1}}>
       <View style={{ flex:1, alignItems: 'center', justifyContent:'center'}}>
        <Text>Generation {route.params.generation}</Text>
        
        <FlatList
            data={data}
            renderItem= {({item}) => <PokeCard number={item.url.split('/')[6]} name={item.name} url={item.url} navigation={navigation}/>}
            style={{width: "99%"}}
            keyExtractor={item => item.name}
        />
        </View>
    
   </SafeAreaView>

  )
}

export default GenerationDetail