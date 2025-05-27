import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from '../style';

import imagem1 from '../../assets/passeios/passeio01.png'
import imagem2 from '../../assets/passeios/passeio02.png'
import imagem3 from '../../assets/passeios/passeio03.png'

export default function TelaPasseios(){
    return (
        <View style={[styles.container, {backgroundColor:'rgb(206, 243, 197)'}]}>
            <Text style={styles.titulo}>Passeios em Paraty</Text>
            <Text style={styles.texto}>
                O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja três exemplos:
            </Text>
            <View style={styles.card}>
                <Text style={styles.tituloCard}>Tirolesa</Text>
                <Image
                source={imagem1}
                style={styles.imgCard}
                />
            </View>
            
            <View style={styles.card}>
                <Text style={styles.tituloCard}>Rafting</Text>   
                <Image
                source={imagem2}
                style={styles.imgCard}
                />
                             
            </View>
            <View style={styles.card}>
                <Text style={styles.tituloCard}>Canoagem</Text>
                <Image
                source={imagem3}
                style={styles.imgCard}
                />         
                
            </View>
        </View>
    )
}
