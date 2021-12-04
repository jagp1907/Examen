import React, {useContext} from 'react'
import { StyleSheet, Text, View, Dimensions,TextInput } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import {PeliculasContext} from '../Context/PeliculasContext';

const PeliculasScreen = ({navigation}) => {
    const {compra,calcular,eliminarCompra,comprar} = useContext(PeliculasContext);
    let ScreenHeight = Dimensions.get("window").height;
    ScreenHeight= (ScreenHeight * .78);
    
    const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      height:ScreenHeight,
      fontWeight: 'bold'
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        fontWeight: 'bold'
      },
    buttonStyle: {
        color: 'white',
        marginBottom: 15,
        fontWeight: 'bold',
    },
    inputView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
});
    return (
        <View style={styles.container2}>
            <Header
                centerComponent={{ text: 'CARRITO', style: { fontWeight: 'bold', color: '#fff'}}}
                containerStyle={{borderBottomColor:'yellow',borderBottomWidth: 0 }}
            />
            <View style={styles.container}>
                    <Text>{compra.nombre}({compra.idioma})</Text>
                    <Text>Precio: ${compra.precio}.00</Text>
                    <Text>Hora: {compra.horario}</Text>
                <SafeAreaView>
                    <View style={styles.inputView}>
                    <Text>Cantidad: </Text>
                        <TextInput
                        onChangeText={(e)=>{calcular(e,compra)}}
                        maxLength={40}
                        placeholder="..."
                        keyboardType='numeric'
                        />
                    </View>
                </SafeAreaView>
                    <Text>Total: ${compra.total}.00</Text>
                <View>
                    <Button 
                    style={styles.buttonStyle}
                    buttonStyle={{backgroundColor:'red'}}
                    title="CANCELAR"
                    onPress={()=>(
                        eliminarCompra(),
                        navigation.goBack()
                        )}
                    />
                </View>
                <View>
                    <Button 
                    style={styles.buttonStyle}
                    buttonStyle={{backgroundColor:'green'}}
                    title="COMPRAR"
                    onPress={()=>{
                        comprar(compra),
                        navigation.goBack()
                    }}
                    />  
                </View>
    
            </View>
            
        </View>
    )
}

export default PeliculasScreen


  