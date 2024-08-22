import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Elevated Cards</Text>
        <ScrollView horizontal>
          <View style={styles.container}>
            <View style={[styles.cardElevated, styles.redCard]}>
              <Text style={styles.cardText}>Red</Text>
            </View>
            <View style={[styles.cardElevated, styles.blueCard]}>
              <Text style={styles.cardText}>Blue</Text>
            </View>
            <View style={[styles.cardElevated, styles.greenCard]}>
              <Text style={styles.cardText}>Green</Text>
            </View>
            <View style={[styles.cardElevated, styles.blackCard]}>
              <Text style={styles.cardText}>Black</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#f0f0f0',
    color: '#333',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  cardElevated: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    // display:'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:10, // Android only
    shadowOffset:{
        width:5,
        height:5,
    },
    shadowColor:"#fff",
    shadowOpacity:1,
    shadowRadius:5
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
  redCard: {
    backgroundColor: 'darkred',
  },
  blueCard: {
    backgroundColor: 'darkblue',
  },
  greenCard: {
    backgroundColor: 'darkgreen',
  },
  blackCard: {
    backgroundColor: 'black',
  },
});
