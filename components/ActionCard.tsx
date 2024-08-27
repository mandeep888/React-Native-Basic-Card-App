import { 
    StyleSheet, 
    Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    const openWebsite = (websiteUri : string)=>{
        Linking.openURL(websiteUri)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]} >
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                React Native a Beginners guide
            </Text>
        </View>
        <View style={styles.imageContainer}>
        <Image resizeMode='stretch'
        source={require('../Assets/Images/cover.jpeg')}
        style={styles.cardImage}
        />
        </View>
        <View style={styles.bodyContainer} >
            <Text numberOfLines={3}>
            React Native is a powerful framework that allows you to build mobile applications using JavaScript and React. Whether you are a seasoned developer or just starting out, understanding how to properly initialize a React Native project is crucial for a smooth development process. In this guide, we'll walk you through the steps to initialize a React Native project, troubleshoot common issues, and set up an efficient folder structure for your app.
            </Text>
        </View>
        <View style={styles.footerContainer} >
           <TouchableOpacity style={styles.socialLinks} onPress={()=>openWebsite('https://mandeep888.hashnode.dev/beginners-guide-to-initializing-a-react-native-project')}>
                <Text style={{color:'black'}}> Read more</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.socialLinks} onPress={()=>openWebsite('https://www.linkedin.com/in/mandeep-singh-jass-22022421a/')}>
                <Text style={{color:'black'}}> Follow Me</Text>
           </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
        backgroundColor: '#f0f0f0',
        color: '#333',
      },
    card: {
        width: 330,
        height: 400,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        padding:10
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10

    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    imageContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardImage: {
        height: 220,
        width:330
    },
    bodyContainer: {
        padding: 10,
        marginTop:10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }

})