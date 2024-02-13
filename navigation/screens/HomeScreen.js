import * as React from 'react';
import { Calendar } from 'react-native-calendars';

export default function HomeScreen({ navigation }) {
    return (
        <Calendar

            style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: 350
            }}
            // Specify the current date
            current={new Date().toISOString().split('T')[0]} // Get current date in "YYYY-MM-DD" format
            // Callback that gets called when the user selects a day
            onDayPress={day => {
                console.log('selected day', day);
            }}
        />
    );
}
