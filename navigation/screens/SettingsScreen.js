import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";

export default function SettingsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Import</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => alert("google drive")}>
                    <View style={styles.button}>
                        <Entypo name="google-drive" size={24} color="white" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => alert("one drive")}>
                    <View style={styles.button}>
                        <Entypo name="onedrive" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    text: {
        fontSize: 26, 
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 20
    },

    buttonContainer: {
        flexDirection: 'row', // Arrange buttons horizontally
        marginTop: 10,
    },

    button: {
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        marginLeft: 20,
    },

});
