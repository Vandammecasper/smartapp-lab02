import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const lab = 
    StyleSheet.create({
        container: {
            paddingVertical: 10,
        },

        increment: {
            fontSize: 32,
            fontweight: '1000', //bold is not supported on android
            color: colors.alpha,
        },

        title: {
            fontSize: 22,
            letterSpacing: .5,
        },

        rating: {
            marginBottom: 8,

        },
        description: {
            marginVertical: 8,
            fontSize: 16,
            lineHeight: 24,
            opacity: .6,
        },
    })