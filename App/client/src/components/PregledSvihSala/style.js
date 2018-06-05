import { StyleSheet, Dimensions } from 'react-native';



export default styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  header:{
    color: 'gray',
    fontSize: 30,
    marginLeft: 12
  },
  paragraph: {
        margin: 15,
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
  MainContainer :{
          // Setting up View inside content in Vertically center.
          justifyContent: 'center',
          flex:1,
          margin: 10
          },

 rowViewContainer: {
          fontSize: 20,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
      }
});
