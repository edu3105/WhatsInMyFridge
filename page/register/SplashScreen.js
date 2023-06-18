import React from 'react';
import{
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet
} from 'react-native';
import CustomButton from './CustomButton';

export default function SplashScreen(){
    return(
        <ImageBackground source={require('../../assets/splash.png')} style={styles.container}>
            <View style={styles.viewtitle}>
                <Text style={styles.title}>
                    Get Cooking
                </Text>
                <Text>
                    Simple way to find Tasty Recipe
                </Text>
                <CustomButton label={"Start Cooking"}></CustomButton>
            </View>

            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title:{
        color:'white',
        fontSize: 60,
        textAlign: 'center'
    },  
    viewtitle:{
        height: 150,
        width: 420,
        alignItems: 'center',
    },
});