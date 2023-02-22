import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Text, View, Button } from 'react-native'
import { lab } from '../../interfaces/Lab'
import { container } from '../../styles/container'
import { lab as labStyles } from '../../styles/lab'
import { useEffect } from 'react'

export default (props:any) => {

    const {setOptions, goBack} = useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
    

    const {lab, localCount} : {lab:lab ; localCount:string} = props.route.params

    //voer deze functie uit als...
    useEffect(() => {
        setOptions({title: lab.title})
        // iets in deze array veranderd
    }, [lab])

    return (
        <View style={container.generic}>
            <Text style={labStyles.increment}>{localCount.padStart(2, '0')}</Text>
            <Text style={labStyles.title}>{lab.title}</Text>
            <Text style={labStyles.description}>{lab.description}</Text>
            <Text style={labStyles.rating}>{'⭐'.repeat(lab.rating)}</Text>
            <Button title="I want to go home" onPress={() => goBack()} />
        </View>
    )
}