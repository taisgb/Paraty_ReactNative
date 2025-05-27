import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from '../style';

import imagem1 from '../../assets/restaurantes/restaurante01.png'
import imagem2 from '../../assets/restaurantes/restaurante02.png'
import imagem3 from '../../assets/restaurantes/restaurante03.png'

export default function TelaRestaurantes(){
    return (
        <View style={[styles.container, {backgroundColor:'rgb(240, 179, 179)'}]}>
            <Text style={styles.titulo}>Bares e Restaurantes</Text>
            <Text style={styles.texto}>
                O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.
            </Text>
            <View style={styles.card}>
                <Image
                source={imagem1}
                style={styles.imgCard}
                />
                <Text style={styles.tituloCard}>Armazém Mar</Text>
                <Text style={styles.textoCard}>Localização: Rod Rio-Santos</Text>
            </View>
            <View style={styles.card}>
                <Image
                source={imagem2}
                style={styles.imgCard}
                />
                <Text style={styles.tituloCard}>Bendita's Restaurante</Text>
                <Text style={styles.textoCard}>Localização: Centro Histórico</Text>
            </View>
            <View style={styles.card}>
                <Image
                source={imagem3}
                style={styles.imgCard}
                />
                <Text style={styles.tituloCard}>Sereia do Mar</Text>
                <Text style={styles.textoCard}>Localização: Praia do Jabaquara</Text>
            </View>
        </View>
    )
}
