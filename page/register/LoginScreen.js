import React , {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    TouchableHighlight
} from 'react-native';
import InputField from './InputField';
import CustomButton from './CustomButton';
import GoogleSVG from '../../assets/misc/google.svg';
import FacebookSVG from '../../assets/misc/facebook.svg';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 25}}>
            
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: '700',
                    color: '#333',
                    marginBottom: 5,
                    marginTop: 20
                }}>
                Hello
            </Text>

            <Text
                style={{
                    fontSize: 20,
                    fontWeight: '300',
                    marginBottom: 50
                }}
            >Welcome Back!</Text>

            <Text>Email</Text>
            <InputField
                label={'Email'}
            />

            <Text>Password</Text>
            <InputField
                label={"Enter Password"}
            />
            
            <Text 
                style={{
                    color: 'gold'
                }}
                onPress={() => console.log("Forget Password touched")}>
                Forgot Password?</Text>

            <CustomButton label={'Sign In'} onPress={() => console.log("Sign in button pressed")} />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
                <View>
                    <Text style={{ width: 125, textAlign: 'center', color: 'gray'}}>Or Sign in With</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
            </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{
                        borderColor: '#ddd',
                        borderWidth: 2,
                        borderRadius: 10,
                        paddingHorizontal: 12,
                        paddingVertical: 12,
                        marginRight: 30
                    }}>
                <GoogleSVG height={22} width={22}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{
                        borderColor: '#ddd',
                        borderWidth: 2,
                        borderRadius: 10,
                        paddingHorizontal: 12,
                        paddingVertical: 12,
                    }}>
                <FacebookSVG height={22} width={22}/>
                </TouchableOpacity>
                </View>

            <View style={{justifyContent:'center', flexDirection:'row'}}>
                    <Text>Don't have an account?</Text>
                    <Text style={{
                        color: 'gold'
                    }}
                    onPress={() => console.log("Sign up button pressed")}> Sign up</Text>
            </View>
            

            </ScrollView>



        </SafeAreaView>
    );
};




export default LoginScreen;