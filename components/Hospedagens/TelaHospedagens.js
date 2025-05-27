import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from '../style';

import imagem1 from '../../assets/hospedagens/hospedagem01.png'
import imagem2 from '../../assets/hospedagens/hospedagem02.png'
import imagem3 from '../../assets/hospedagens/hospedagem03.png'

export default function TelaHospedagens(){
    return (
        <View style={[styles.container, {backgroundColor:'rgb(191, 216, 240)'}]}>
            <Text style={styles.titulo}>Pousadas e Hotéis</Text>
            <Text style={styles.texto}>
                Paraty conta com excelentes hotéis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas:
            </Text>
            <View style={styles.card}>
                <Image
                source={imagem1}
                style={styles.imgCard}
                />
                <Text style={styles.tituloCard}>Pousada Missanga</Text>
                <Text style={styles.textoCard}>Localização: Próx. à Av. Roberto Silveira</Text>
            </View>
            <View style={styles.card}>
                <Image
                source={imagem2}
                style={styles.imgCard}
                />
                <Text style={styles.tituloCard}>Pousada Morro do Forte</Text>
                <Text style={styles.textoCard}>Localização: Praia Pontal</Text>
            </View>
            <View style={styles.card}>
                <Image
                source={imagem3}
                style={styles.imgCard}
                />
                <Text style={styles.tituloCard}>Pousada Porto Imperial</Text>
                <Text style={styles.textoCard}>Localização: Centro Histórico</Text>
            </View>
        </View>
    )
}
