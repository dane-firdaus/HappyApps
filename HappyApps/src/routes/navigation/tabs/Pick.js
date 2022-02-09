import * as React from 'react'
import { Component } from 'react'
// import { Text } from "react-native-svg";
import { View, Picker, Text, Button } from 'react-native'
// const handleSubmit = e => {
//     e.prevenDefault();
// props.onSubmit({
//     id: Math.floor(Math.random() * 10000),
//     text: input
//   });
//   setInput('');
// };
// }
class Picks extends Component {
  state = {
    Alasan: '',
    Agenda: '',
  }
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          Jenis Agenda :
        </Text>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          {this.state.Alasan}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Picker
            selectedValue={this.state.Alasan}
            onValueChange={(itemValue) => this.setState({ Alasan: itemValue })}
            style={{ width: '80%', color: '#000', fontWeight: 'bold' }}
          >
            <Picker.Item label="Pilih Kepentingan" />
            <Picker.Item label="Visit" value="Visit" />
            <Picker.Item label="Call" value="Call" />
          </Picker>
        </View>
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>
          Kegiatan :
        </Text>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          {this.state.Agenda}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Picker
            selectedValue={this.state.Agenda}
            onValueChange={(itemValue) => this.setState({ Agenda: itemValue })}
            style={{ width: '80%', color: '#000', fontWeight: 'bold' }}
          >
            <Picker.Item label="Pilih Kepentingan" />
            <Picker.Item label="Produk Knowlage" value="Produk Knowlage" />
            <Picker.Item label="Checking Order" value="Checking Order" />
            <Picker.Item
              label="Visit New Customer"
              value="Visit New Customer"
            />
            <Picker.Item label="Internal Meeting" value="Internal Meeting" />
            <Picker.Item label="External Meeting" value="External Meeting" />
            <Picker.Item label="Relasionship" value="Relashionship" />
          </Picker>
        </View>
        <Button
        
        title="submit" />
      </View>

      // <View style={{flex:1, justifyContent: 'center', alignItems:'center' }}>
      //  </View>
    )
  }
}
export default Picks
