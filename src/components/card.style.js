import { StyleSheet, Dimensions, View, Image } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'gray',
        borderRadius:10,
        margin:10,
        padding:10,
        height:320,
        width:160
    },
    text_style:{
        fontWeight:'bold',
        fontSize:20,
        color:'purple',
        borderRadius:50
    },
    ara_style:{
        backgroundColor:'gray',
        padding:10,
        margin:10,
        borderRadius:50,
    },
    ara_view_style:{
        padding:10,
        borderRadius:50
    },
    image: {
        height: Dimensions.get('window').height / 4,
        margin: 10,
        borderRadius: 6,
    },
    
});