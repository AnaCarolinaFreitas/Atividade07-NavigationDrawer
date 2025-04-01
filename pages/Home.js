import React from "react";
import { SafeAreaView, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function Home(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>All Spider Man Movies</Text>
            <ScrollView style={styles.scroll}>
                <Image source={require('../img/homecoming.png')} style={styles.image} />
                <Image source={require('../img/Farfromhome.png')} style={styles.image} />
                <Image source={require('../img/Spiderman.png')} style={styles.image} />
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    scroll: {
        width: '100%',
        padding: 14,
      },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20
    },
});