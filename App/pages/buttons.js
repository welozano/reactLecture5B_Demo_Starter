import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Buttons extends React.Component {

  static navigationOptions = {
     title: 'Buttons',
   };

  render() {
    return (
      <View style={styles.container}>
      
      <Button
        title="Try to go to buttons - Navigate"
        onPress={()=> this.props.navigation.navigate("Buttons")}
      />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
