import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize
} from 'react-native-responsive-dimensions'
import LinearGradient from 'react-native-linear-gradient';


const MainScreen = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => alert('hamza')}>
                            <Image style={styles.menu_button} source={require('../images/icon/menu.png')} />
                        </TouchableOpacity>
                        <Text style={styles.menu_text}>
                            Home
                        </Text>
                    </View>
                    <View>
                        <Image style={styles.shop} source={require('../images/icon/shop.png')} />
                    </View>
                </View>
            </View>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#de2424', '#c1511d', '#e47b56']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>Hi jaykey</Text>
                <Text style={{ marginTop: responsiveHeight(1), marginLeft: responsiveWidth(8), fontSize: responsiveFontSize(3), color: '#fff', fontWeight: '300' }}>What <Text>Pizza</Text>do you</Text>
                <Text style={{ marginLeft: responsiveWidth(8), fontSize: responsiveFontSize(3), color: '#fff', fontWeight: '300' }}>Want to try today?</Text>
            </LinearGradient>
            <View style={styles.main_modal}>
                <View style={styles.modal}>
                    <Image style={{ width: responsiveWidth(40), height: responsiveHeight(30) }} source={require('../images/icon/pizza1.png')} />
                    <View style={{ width: responsiveWidth(50), marginTop: responsiveHeight(2) }}>
                        <Text style={{ color: '#F5313F', fontSize: responsiveFontSize(3), fontWeight: 'bold', position: 'relative', }}>Reorder again?</Text>
                        <Text style={{ fontSize: responsiveFontSize(2), marginVertical: responsiveHeight(0.5) }}>SMALL, THIN, CRUST</Text>
                        <Text style={{ fontSize: responsiveFontSize(2) }}>TOMATOES, CHESSE</Text>
                        <Text style={{ marginVertical: responsiveHeight(0.5), fontSize: responsiveFontSize(3), fontWeight: 'bold', color: '#F5313F' }}>$12</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#de4324', '#c1511d', '#e47b56']} style={styles.linearButton}>
                                <View style={{ alignItems: 'center', marginTop: 6 }}>
                                    <Text style={{ fontSize: responsiveFontSize(2.5), color: '#fff' }}>
                                        Add To Cart
                                    </Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.main_modal}>
                <View style={styles.modal2}>
                    <Text style={{ color: '#F5313F', fontSize: responsiveFontSize(3), marginTop: responsiveHeight(1) }}>Create Your Own Pizza</Text>
                    <Image style={{ width: responsiveWidth(55), position: 'absolute', marginTop: responsiveHeight(4), height: responsiveWidth(48) }} source={require('../images/icon/pizza2.png')} />
                </View>
            </View>
        </>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        marginTop: responsiveWidth(0)
    },
    header: {
        height: responsiveHeight(9),
        width: responsiveWidth(100),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menu_button: {
        width: responsiveWidth(7),
        height: responsiveWidth(5),
        marginHorizontal: responsiveWidth(5)
    },
    menu_text: {
        fontSize: responsiveFontSize(3.7),
        marginHorizontal: responsiveWidth(1)
    },
    shop: {
        width: responsiveWidth(7),
        height: responsiveWidth(7),
        marginRight: responsiveWidth(6)
    },
    linearGradient: {
        width: responsiveWidth(100),
        height: responsiveHeight(25)
    },
    buttonText: {
        color: '#fff',
        marginTop: responsiveHeight(4),
        marginLeft: responsiveWidth(6),
        fontWeight: '700'
    },
    main_modal: {
        alignItems: 'center',
        position: 'relative',
        top: responsiveHeight(-4)
    },
    modal: {
        width: responsiveWidth(88),
        height: responsiveHeight(30),
        backgroundColor: '#e8e4e3',
        borderRadius: responsiveWidth(4),
        flexDirection: 'row',
    },
    linearButton: {
        width: responsiveWidth(35),
        height: responsiveHeight(7),
        borderRadius: responsiveWidth(8)
    },
    modal2: {
        width: responsiveWidth(88),
        height: responsiveHeight(33),
        marginTop: 8,
        borderRadius: responsiveWidth(4),
        backgroundColor: '#e8e4e3',
        position: 'relative',
        alignItems: 'center'
    }
})