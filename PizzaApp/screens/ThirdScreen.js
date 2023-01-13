import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const SecondScreen = ({navigation}) => {
    return (
        <View>
            <View>
                <View>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#de2424', '#c1511d', '#e47b56']}>
                        <View style={{ alignItems: 'center', width: responsiveWidth(100), height: responsiveHeight(30) }}>
                            <ImageBackground style={{ width: responsiveWidth(84), marginTop: responsiveHeight(2), alignItems: 'center', height: responsiveHeight(52) }} source={require('../images/icon/Ellipse.png')}>
                                <Image source={require('../images/icon/pizza3.png')} />
                            </ImageBackground>
                        </View>
                    </LinearGradient>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ alignItems: 'center', marginTop: responsiveHeight(25), width: responsiveWidth(88), height: responsiveHeight(20),borderRadius: responsiveWidth(4), backgroundColor: '#e8e4e3' }}>
                    <Text style={{ fontSize: responsiveFontSize(2.5), marginVertical: responsiveHeight(1) }}>
                        Choose Your Crust
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: responsiveHeight(1) }}>
                        <TouchableOpacity>
                            <LinearGradient style={styles.linearButton} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#de2424', '#c1511d', '#e47b56']}>
                                <View>
                                    <Text style={{ fontSize: responsiveFontSize(2.5), color: '#fff' }}>Thin</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <LinearGradient style={styles.linearButton} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#de2424', '#c1511d', '#e47b56']}>
                                <View>
                                    <Text style={{ fontSize: responsiveFontSize(2.5), color: '#fff' }}>Thick</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{marginTop: responsiveHeight(2)}}>
                <TouchableOpacity onPress={() => navigation.navigate('ForthScreen')}>
                <LinearGradient style={{width: responsiveWidth(100), height: responsiveHeight(10), alignItems: 'center', justifyContent: 'center'}} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#de2424', '#c1511d', '#e47b56']}>
                                <View>
                                    <Text style={{ fontSize: responsiveFontSize(3), color: '#fff', fontWeight: 'bold', letterSpacing: 1.5 }}>NEXT</Text>
                                </View>
                            </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SecondScreen

const styles = StyleSheet.create({
    linearButton: {
        width: responsiveWidth(25),
        height: responsiveHeight(8),
        borderRadius: responsiveWidth(8),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: responsiveWidth(6)
    },
})