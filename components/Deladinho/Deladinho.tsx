import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export function Deladinho(){
    const [lado, setLado] = useState('');
    const [area, setArea] = useState('');

    const [resultado, setResultado] = useState([]);

    function areaTriangulo(){
        console.log(resultado);
        if (lado !== undefined){
            let Final = (Math.sqrt(3)*Math.pow(lado, 2)/4).toFixed(2)

            setArea(Final)
            resultado.push(Final)

            setLado('')
        }
    }

    return(
        <View style={style.fromContext}>
            <View style={style.form}>
                <Text style={style.formLabel}>Cálculo da área do triângulo.</Text>
                <Text>Tamanho do lado:</Text>
                <TextInput
                placeholder="Ex. 21"
                value={lado}
                onChangeText={setLado}
                inputMode="numeric"
                style={style.formInput}
                />
                
                <Pressable
                onPress= {() => areaTriangulo()}
                style={style.formButton}
                >
                    <Text>Mostrar resultado:</Text>
                </Pressable>

                <Text style={style.result}>{area}</Text>

                <FlatList
                data={resultado.reverse()}
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

const style = StyleSheet.create({
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