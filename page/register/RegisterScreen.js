import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';

import { Checkbox, NativeBaseProvider } from 'native-base';

import InputField from './InputField.js';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from './CustomButton.js';


const RegisterScreen = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [dobLabel, setDobLabel] = useState('Date of Birth');

    return (      
        <NativeBaseProvider>

       
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 25 }}>
            
                <Text
                    style={{
                        // fontFamily: 'Roboto-Medium',
                        fontSize: 20,
                        fontWeight: '700',
                        color: '#333',
                        marginBottom: 5,
                    }}>
                    Create an account
                </Text>

                <Text>Lets help you set up your account, it</Text>
                <Text style={{marginBottom: 10}}>won't take long !</Text>

                <InputField
                    label={'Full Name'}
                    icon={
                        <Ionicons
                            name="person-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                />

                <InputField
                    label={'Email ID'}
                    icon={
                        <MaterialIcons
                            name="alternate-email"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    keyboardType="email-address"
                />

                <InputField
                    label={'Password'}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    inputType="password"
                />

                <InputField
                    label={'Confirm Password'}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    inputType="password"
                />

                <Checkbox shadow={2} value="test" >
                    I Accept the terms and conditions</Checkbox>

                <CustomButton label={'Sign Up'} onPress={() => { }}/>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text>Already registered?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
        </NativeBaseProvider>  
    );
};

export default RegisterScreen;