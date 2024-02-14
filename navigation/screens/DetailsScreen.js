import { StackRouter } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.pillbox}>
                <MaterialCommunityIcons name="pill" style={styles.pill}/>
                <Text style={styles.text}>Pille</Text>
                <View style={styles.time}>
                    <Text style={styles.timer}>12:00</Text>
                </View>
            </View>
            <View style={styles.pillbox}>
                <MaterialCommunityIcons name="pill" style={styles.pill}/>
                <Text style={styles.text}>Pille</Text>
                <View style={styles.time}>
                    <Text style={styles.timer}>12:00</Text>
                </View>
            </View>
            <View style={styles.pillbox}>
                <MaterialCommunityIcons name="pill" style={styles.pill}/>
                <Text style={styles.text}>Pille</Text>
                <View style={styles.time}>
                    <Text style={styles.timer}>12:00</Text>
                </View>
            </View>
            <View style={styles.pillbox}>
                <MaterialCommunityIcons name="pill" style={styles.pill}/>
                <Text style={styles.text}>Pille</Text>
                <View style={styles.time}>
                    <Text style={styles.timer}>12:00</Text>
                </View>
            </View>
            <View style={styles.pillbox}>
                <MaterialCommunityIcons name="pill" style={styles.pill}/>
                <Text style={styles.text}>Pille</Text>
                <View style={styles.time}>
                    <Text style={styles.timer}>12:00</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex: 1
        
    },

    pillbox:{
        backgroundColor: "gray",
        borderRadius: 5,
        margin: 10,
        padding: 10,
        flexDirection:"row"

    },

    text: {

        fontSize: 20,
        marginTop: 12,
        paddingLeft: 90

    },

    pill: {

        color: "white",
        fontSize: 25,
        paddingTop: 5,
        paddingRight: 10,
        marginTop: 8,
        marginLeft: 10
        
    },

    time:{
        backgroundColor: "white",
        opacity: 0.7,
        height: 50,
        width: 100,
        marginTop: 1,
        marginLeft: 80,
        borderRadius: 5
    },

    timer: {
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 25
    }
    


});
