import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import LinearGradient from 'react-native-linear-gradient';



const ForthScreen = ({navigation}) => {
    return (
        <View>
            <LinearGradient style={styles.linearButton} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#de2424', '#c1511d', '#e47b56']}>
                <View style={{ position: 'relative', left: -4, top: 30 }}>
                    <Text style={{ fontSize: responsiveFontSize(3), color: '#fff', marginVertical: responsiveHeight(0.5) }}>
                        Check Your
                    </Text>
                    <Text style={{ fontSize: responsiveFontSize(3), color: '#fff', fontWeight: '700' }}>
                        Custom Pizza
                    </Text>
                </View>
                <ImageBackground style={{ width: responsiveWidth(50), marginTop: responsiveHeight(10), height: responsiveHeight(60) }} source={require('../images/icon/Ellipse1.png')}>
                    <Image style={{ width: responsiveWidth(50), height: responsiveHeight(63) }} source={require('../images/icon/pizza4.png')} />
                </ImageBackground>
            </LinearGradient>
            <View>
                <View style={{ width: responsiveWidth(65), position: 'relative', zIndex: 10, height: responsiveHeight(45), backgroundColor: '#e8e4e3', borderTopRightRadius: responsiveWidth(6), borderBottomRightRadius: responsiveWidth(6) }}>
                    <Text style={{ margin: 24, fontSize: responsiveFontSize(2.5), color: '#F5313F' }}>ORDER SUMMARY</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 16 }}>
                        <View>
                            <Text style={{ marginVertical: 6, fontSize: responsiveFontSize(2) }}>Medium Size</Text>
                            <Text style={{ fontSize: responsiveFontSize(2) }}>Thick Crust</Text>
                        </View>
                        <View>
                            <Text style={{ marginVertical: 6, fontSize: responsiveFontSize(2) }}>10.00$</Text>
                            <Text style={{ fontSize: responsiveFontSize(2) }}>4.00$</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'space-evenly' }}>
                        <Text style={{ fontSize: responsiveFontSize(2.5), color: '#F5313F' }}>Total</Text>
                        <Text style={{ fontSize: responsiveFontSize(2.5), color: '#F5313F' }}>14.00$</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
                <LinearGradient style={{ width: responsiveWidth(100), marginTop: responsiveHeight(2), height: responsiveHeight(10), alignItems: 'center', justifyContent: 'center' }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#de2424', '#c1511d', '#e47b56']}>
                    <View>
                        <Text style={{ fontSize: responsiveFontSize(3), color: '#fff', fontWeight: 'bold', letterSpacing: 1.5 }}>CONFIRM ORDER</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default ForthScreen

const styles = StyleSheet.create({
    linearButton: {
        width: responsiveWidth(100),
        height: responsiveHeight(30),
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})