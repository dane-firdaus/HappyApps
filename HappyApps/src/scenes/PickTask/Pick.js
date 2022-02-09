import React, { Component } from 'react'
import { Text, View, Picker, Button } from 'react-native'
import axios from 'axios'

class Picke extends Component {
  //Tambahkan code state
  state = {
    namaTempat: '',
    agenda: '',
  }
  
// onChange = (submit) => {
// axios.get()
// }
  render() {
    return (
      //tambahkan code ini
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          // alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 12 }}>
          Jenis Task
        </Text>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          {this.state.namaTempat}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Picker
            selectedValue={this.state.namaTempat}
            onValueChange={(itemValue) =>
              this.setState({ namaTempat: itemValue })
            }
            style={{ width: '500px', color: '#000', fontWeight: 'bold' }}
          >
            <Picker.Item label="Pilih Kepentingan Anda" />
            <Picker.Item label="Call" value="Call" />
            <Picker.Item label="Visit	" value="Visit" />
          </Picker>
        </View>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 12,
            marginTop: 12,
          }}
        >
          Agenda Anda :
        </Text>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          {this.state.agenda}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:50,
          }}
        >
          <Picker
            selectedValue={this.state.agenda}
            onValueChange={(itemValue) => this.setState({ agenda: itemValue })}
            style={{ width: '500px', color: '#000', fontWeight: 'bold' }}
          >
            <Picker.Item label="Pilih Agenda" />
            <Picker.Item label="Customer Visit" value="CustomerVisit" />
            <Picker.Item label="Calling To Follow up	" value="FollowUp" />
            <Picker.Item label=" made relationship	" value="relationship" />
          </Picker>
        </View>
        
        <Button title="Submit"
        color="Blue"
        // onPress={}
        />
      </View>
    )
  }
}

export default Picke
