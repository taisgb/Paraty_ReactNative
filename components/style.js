import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container_principal:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }, 
    
    container: {        
        justifyContent: 'center',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 30              

    },
    img: {
        width: 300,
        height: 300,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10
    },

    card: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: 320,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        borderRadius: 20,
        borderColor: '#979797',
        borderWidth: 1
    },

    tituloCard: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    imgCard: {
        width: '100%',
        height: 140,
        justifyContent: 'center',
        borderRadius: 5
    },

    textoCard: {
        textAlign: 'center',
        fontSize: 14,
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10      
    },

    texto: {
        textAlign: 'justify',
        fontSize: 15,
        marginBottom: 9

    },

    texto_principal: {
        textAlign: 'justify',
        fontSize: 20

    },
    btn_home: {
        backgroundColor:'rgb(25, 84, 247)',        
        width: 200,
        height: 40,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles;
