import React,{Component} from 'react';
import { View,StyleSheet } from 'react-native'
import ProfileComponent from '../components/ProfileComponent'


export default class ProfilePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <ProfileComponent />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#00b5ec',
    }
})