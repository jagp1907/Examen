import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import {PeliculasContext} from '../Context/PeliculasContext';

const HomeScreen = ({navigation}) => {
    const {cartelera,agregar} = useContext(PeliculasContext);
    return (
        <ScrollView>
            <Header
                centerComponent={{ text:'CINEPOLIS', style: { fontWeight: 'bold', color: 'white'}}}
                containerStyle={{borderBottomColor:'yellow',borderBottomWidth: 0 }}
            />

            <View style={styles.container2}>
            {cartelera.map((e,i)=>{
                return(
                    <Card  
                    containerStyle={{
                        width: '95%',
                        marginBottom: 10
                    }} 
                    key={i}>
                        <Card.Title>{e.nombre}</Card.Title> 
                        <Card.Divider/>
                       
                        <View style={styles.container}>
                            <View style={styles.container50}>
                                <Image
                                style={styles.imagen}
                                source={{
                                   uri: `${e.url}`, 
                                }}
                                
                                />
                            </View>
                            <View style={styles.container50}>
                                <Text>{e.idioma}</Text>
                                <Text>{e.clasificacion}</Text>
                                {e.horarios.map((horario,index)=>{
                                    return( 
                                        <View style={styles.container2}>
                                            <Button
                                                onPress={()=>(
                                                    agregar(e,horario),
                                                    navigation.navigate('PeliculasScreen')
                                                    )}
                                                key={index}
                                                title={horario}
                                                style={styles.buttonStyle}
                                                buttonStyle={{backgroundColor: '#66FF99'}}
                                            />
                                        </View>
                                        
                                    )
                                })} 

                            </View>
                        </View>
                    </Card>
                );
            })
            }
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#CCFFFF',
        flexDirection:'row',    
    },
    container50:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    imagen: {
        minHeight:150,
        minWidth: 100,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom:10,
        fontWeight: 'bold'
    },
      buttonStyle: {
        color: 'green',
        marginBottom: 15,
    }
});
  