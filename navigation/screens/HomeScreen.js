import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Image, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = React.useState(false); // State to control modal visibility

    return (
        <View style={styles.container}>
            <View>
                <Calendar style={styles.calendar}
                    // Specify the current date
                    current={new Date().toISOString()} // Get current date in "YYYY-MM-DD" format
                    // Callback that gets called when the user selects a day
                    onDayPress={day => {
                        console.log('selected day', day);
                    }}
                />
            </View>
            <View style={styles.feels}>
                <Text style={styles.feelsTxt}>How are you feeling today?</Text>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <MaterialCommunityIcons name="emoticon-happy-outline" size={30} color={"green"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert("mood",'neutral')}>
                            <MaterialCommunityIcons name="emoticon-neutral-outline" size={30} color={"orange"}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialCommunityIcons onPress={() => Alert.alert("mood","sad")} name="emoticon-sad-outline" size={30} color={"red"}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Alert.alert("mood",'sick')}>
                            <MaterialCommunityIcons name="emoticon-sick-outline" size={30} color={"purple"}/>
                        </TouchableOpacity>
                </View>
            </View>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image
                            style={{ width: 200, height: 200 }}
                            source={{ uri: "https://media.tenor.com/lCKwsD2OW1kAAAAj/happy-cat-happy-happy-cat.gif" }}
                        />
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    calendar: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 350
    },

    feels: {
        paddingLeft: 20,
        paddingTop: 20,
    },

    feelsTxt: {
        fontSize: 20,
    },

    icon: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 10,
        marginLeft: -65
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent background
    },

    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center'
    }
});
