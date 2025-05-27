import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "../style";



import imagem from '../../assets/paraty.png'

export default function TelaInicial(props) {
    return (
        <View style={styles.container_principal}>
            <Text style={styles.titulo}>Paraty</Text>

            <Text style={styles.texto_principal}>Saiba o que visitar em Paraty</Text>

            <Image
            source={imagem}
            style={styles.img}
            />


            <Pressable            
            onPress={() => {props.navigation.navigate('TelaRestaurantes')}}
            style={styles.btn_home}
            >                
                <Text style={styles.btnTitle}>VER RESTAURANTES</Text>
            </Pressable>

            <Pressable            
            onPress={() => {props.navigation.navigate('TelaPasseios')}}
            style={styles.btn_home}         
            >
                <Text style={styles.btnTitle}>VER PASSEIOS</Text>
            </Pressable>

            <Pressable            
            onPress={() => {props.navigation.navigate('TelaHospedagens')}}
            style={styles.btn_home}
            >
                <Text style={styles.btnTitle}>VER HOSPEDAGENS</Text>
            </Pressable>
        </View>

    )
}