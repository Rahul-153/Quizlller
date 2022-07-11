import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Result = ({ navigation, route }) => {
    const Score = route.params;
    const img = Score.score > 4 ? require('../images/Success.jpg') : require('../images/Lose.jpg');
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Result</Text>
            </View>
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreVal}>{Score.score}/10</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.banner}
                    source={img}
                />
            </View>
            <View style={{ height: '100%', flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonContainer}>
                    <Text style={styles.buttonStart}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    titleContainer: {
        marginBottom: 10,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black'
    },
    scoreContainer: {
        alignItems: 'center'
    },
    scoreVal: {
        color: 'black',
        fontSize: 40,
        marginTop: 40
    },
    banner: {
        height: 300,
        width: 300,
    },
    imageContainer: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        backgroundColor: '#F15BB5',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
        width: '50%',
        marginTop: 10
    },
    buttonStart: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingVertical: 10
    }
})