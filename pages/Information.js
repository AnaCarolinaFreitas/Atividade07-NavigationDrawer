import React from "react";
import { SafeAreaView, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function Home(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>More About the movies</Text>
            <ScrollView style={styles.scroll}>
                <Image source={require('../img/homecoming.png')} style={styles.image} />
                <Text style={styles.text}>Peter Parker tries to stop Adrian 'The Vulture' Toomes from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.</Text>

                <Image source={require('../img/Farfromhome.png')} style={styles.image} />
                <Text style={styles.text}>Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.</Text>

                <Image source={require('../img/Spiderman.png')} style={styles.image} />
                <Text style={styles.text}>With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.</Text>
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
        marginBottom: 20,
        alignItems: 'center',
    },
    scroll: {
        width: '100%',
        padding: 14,
      },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        borderRadius: 100
    },

    text: {
        fontSize: 16,
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
    }
});