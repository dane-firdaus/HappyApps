import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import Calendar from '../../components/Calendar/Calendar'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Contact = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Contact</Text>
    <Calendar/>
    <Button
      title="Add Task"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate('Details', { from: 'Contact' })
      }}
    />
  </View>
  
)

Contact.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Contact.defaultProps = {
  navigation: { navigate: () => null },
}

export default Contact
