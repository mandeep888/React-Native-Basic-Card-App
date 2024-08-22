import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.container}>                                       
            <View style={[styles.card , styles.redCard]}>                     
                <Text style={styles.cardText}>
                    Red
                </Text>
            </View>
            <View style={[styles.card , styles.blueCard]}>                     
                <Text style={styles.cardText}>
                    Blue
                </Text>
            </View>
            <View style={[styles.card , styles.greenCard]}>                     
                <Text style={styles.cardText}>
                    Green
                </Text>
            </View>
            <View style={[styles.card , styles.blackCard]}>                     
                <Text style={styles.cardText}>
                    Black
                </Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        padding:20,
        backgroundColor:'#f0f0f0',
        color:'#333'
    },
    container:{ 
        flex:1,
        flexDirection:'row',
        padding:10,
    },
    card:{
        width:100,
        height:100,
        margin:10,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:10,
        // display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cardText:{
        fontSize:20,
        fontWeight:'semibold'
    },
    redCard:{
        backgroundColor:'darkred'
    },
    blueCard:{
        backgroundColor:'darkblue'
    },
    greenCard:{
        backgroundColor:'darkgreen'
    },
    blackCard:{
        backgroundColor:'black'
    }
});
