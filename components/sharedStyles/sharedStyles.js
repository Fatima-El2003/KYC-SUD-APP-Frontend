// SharedStyles.js
import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  heading_flex:{
    flex: 1,
    flexDirection: 'row',
    flexWrap:'nowrap',
    marginRight:50,
    marginTop:10,
  },
  heading_img: {
    width:100,
    height:100,
    marginRight:20,
  },
  heading_text: {
    fontSize:16,
    fontWeight:'bold',
    
  },
  heading_title: {
    fontSize:20,
    fontWeight:'bold',
    marginTop:20,
    marginBottom:15,
  },
  heading:{
    backgroundColor:'grey',
    marginTop:10,
    marginBottom:30,
  }



  // Add more shared styles here
});
