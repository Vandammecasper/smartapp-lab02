import { ParamListBase, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Text, View, Pressable } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import labs from "../../assets/data/labs.json"
import { lab } from "../../interfaces/Lab"
import { container } from "../../styles/container"
import { lab as labStyles } from "../../styles/lab"

export default () => {
    let count = 0
    const {navigate} =  useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

    //haal iets uit het object
    //geef aan wat het is
    const showLab = ({item}: {item:lab}) => {
        //todo: styling
        //todo: increment per lab
        //todo: show the detail
        
        count++
        const localCount : string = count.toString()
        return (
            <Pressable style={labStyles.container} onPress={() => navigate('Detail', {lab:item, localCount:localCount})}>
                <Text style={labStyles.increment}>{localCount.padStart(2, '0')}</Text>
                <Text style={labStyles.title}>{item.title}</Text>
                <Text style={labStyles.rating}>{'⭐'.repeat(item.rating)}</Text>
            </Pressable>
        )
    }

    return (
        <View style= {container.generic}>
            <FlatList<lab> data={labs} renderItem={showLab}/>
        </View>
    )
}