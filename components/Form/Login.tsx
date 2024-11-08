import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export function Login() {

    return (
        <View>
            <TextInput
                placeholder="E-mail"
            />
            <TextInput
                placeholder="Senha"
            />
        </View>
    )
}