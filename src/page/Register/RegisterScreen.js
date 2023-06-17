import React, {useState} from "react";

import {SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity} from 'react-native';

import DatePicker from "react-native-date-picker";

export default function RegisterScreen ({navigation}){
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [dobLabel, setDobLabel] = useState('Date of Birth');

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{paddingHorizontal: 25}}>
            
                <Text>
                    Register
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}