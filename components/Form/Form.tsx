import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput, FlatList } from "react-native-gesture-handler";

export function Form(){
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [Imc, setImc] = useState('');

    const [imcList, setImcList] = useState([]);


    function validatorImc()
    {
        console.log(imcList);
        if (weight !== undefined && height !== undefined){
            let TotalImc = (weight/(height*height)).toFixed(2)

            //setImcList((arr) => [...arr, TotalImc]);
            imcList.push(TotalImc) //adicionando um novo índice
            setImc(TotalImc) // Imc recebe novo resultado

            //setImc(TotalImc)
            setHeight('')
            setWeight('')
        }
    }

    return(
        <View style={styles.fromContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura:</Text>
                <TextInput
                    placeholder="Ex. 1.75"
                    value={height}
                    onChangeText={setHeight}
                    inputMode="numeric"
                    style={styles.formInput}
                />

                <Text style={styles.formLabel}>Peso:</Text>
                <TextInput
                    placeholder="Ex. 67.5"
                    value={weight}
                    onChangeText={setWeight}
                    inputMode="numeric"
                    style={styles.formInput}
                />

            <Pressable
                onPress = {() => validatorImc()}
                style={styles.formButton}
            >
                <Text style={styles.formButtonText}>Calcular:</Text>
            </Pressable>

            <Text style={styles.result}>{Imc}</Text>

            <FlatList
                data={imcList.reverse()}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{item}</Text>
                        </View>
                    )
                }}
            />
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    fromContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor:"#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20
    },
    formInput: {
        width: "90%",
        height: 40,
        borderRadius: 30,
        backgroundColor: "#f6f6f6",
        margin: 12,
        paddingLeft: 10,
    },
    formButton: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30
    },
    formButtonText: {
        fontSize: 20,
        color: "#fff"
    },
    result: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%"
    }
})
