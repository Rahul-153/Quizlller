import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Quiz = ({ navigation }) => {

    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [load, setLoad] = useState(false);
    const getQuiz = async () => {
        setLoad(true);
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        setOptions(generateOptionsShuffled(data.results[0]))
        setLoad(false);
    }
    useEffect(() => {
        getQuiz();
    }, [])
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    const nextQues = () => {
        setQues(ques + 1);
        setOptions(generateOptionsShuffled(questions[ques + 1]));
    }
    const generateOptionsShuffled = (_questions) => {
        const option = [..._questions.incorrect_answers];
        option.push(_questions.correct_answer);
        shuffleArray(option);
        return option;
    }
    const selectedOption = (_option) => {
        if (_option === questions[ques].correct_answer) {
            setScore(score + 1);
        }
        if (ques !== 9) {
            setQues(ques + 1);
            setOptions(generateOptionsShuffled(questions[ques + 1]));
        }
    }
    return (
        <View>
            {load ? <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black' }}>Loading....</Text>
            </View> : questions &&
            (<View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Q.{decodeURIComponent(questions[ques].question)}</Text>
                </View>
                <View style={styles.optionContainer}>
                    <TouchableOpacity style={styles.option} onPress={() => selectedOption(options[0])}>
                        <Text style={styles.optionText}>{decodeURIComponent(options[0])}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => selectedOption(options[1])}>
                        <Text style={styles.optionText}>{decodeURIComponent(options[1])}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => selectedOption(options[2])}>
                        <Text style={styles.optionText}>{decodeURIComponent(options[2])}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => selectedOption(options[3])}>
                        <Text style={styles.optionText}>{decodeURIComponent(options[3])}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    {ques < 9 && <TouchableOpacity style={styles.buttonContainer} onPress={nextQues}>
                        <Text style={styles.buttonStart}>Skip</Text>
                    </TouchableOpacity>}
                    {ques === 9 && <TouchableOpacity onPress={() => navigation.navigate('Result', { score: score })} style={styles.buttonContainer}>
                        <Text style={styles.buttonStart}>Show Results</Text>
                    </TouchableOpacity>}
                </View>
            </View>)
            }
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
        height: '100%',
        paddingHorizontal: 20
    },
    optionContainer: {
        flex: 1,
        marginTop: 20
    },
    option: {
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: '#9B5DE5',
        borderRadius: 10
    },
    optionText: {
        fontSize: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    buttons: {
        paddingBottom: 20,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonContainer: {
        backgroundColor: '#F15BB5',
        marginBottom: 30,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonStart: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})