import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Quizlller</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.banner}
                    source={require('../images/quiz.jpg')}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.buttonContainer}>
                <Text style={styles.buttonStart}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 50
    },
    banner: {
        height: 300,
        width: 300,
    },
    imageContainer: {
        flex: 1,
        marginTop: 100,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height: '100%',
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#F15BB5',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonStart: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    }
})