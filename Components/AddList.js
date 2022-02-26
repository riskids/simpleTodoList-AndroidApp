import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddList = () => {

    const [text,setText] = useState('')

    const onChange = (textInput) =>{
        setText(textInput)
    }

  return (
    <View>
        <TextInput style={styles.txtInput} placeholder="Yang Akan Saya Lakukan..." onChangeText={onChange} />
        <TouchableOpacity style={styles.button} >
            <Text style={styles.txt}>
                <Icon name="plus" size={30} />
                Tambah
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    txtInput:{
        padding:8,
        fontSize:18,
        height:60,
    },
    button:{
        backgroundColor:'purple',
        margin:5,
        padding:10,
        justifyContent:'flex-start'
    },
    txt:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center'
    }
})

export default AddList