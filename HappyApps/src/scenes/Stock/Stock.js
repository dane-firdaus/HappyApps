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

const Stock = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Stock</Text>
    <Calendar/>
    <Button
      title="Add Task"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate('Details', { from: 'Stock' })
      }}
    />
  </View>
  
)

Stock.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Stock.defaultProps = {
  navigation: { navigate: () => null },
}

export default Stock
