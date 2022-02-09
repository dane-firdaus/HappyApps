import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, Text, Image, Button, Linking } from 'react-native'
import {
  DrawerRouter,
  Link,
  NavigationContainer,
  useLinkTo,
} from '@react-navigation/native'
import Akun from '../../../scenes/Account'
import { State } from 'react-native-gesture-handler'
import StackNavigator from 'react-navigation'
import Mainmenu from '../Menu/menu'
import { MainmenuNavigator } from '../stacks/Stacks'
import Menus from '../Menu/Menus'


import { DrawerActions } from '@react-navigation/native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'
import Account from '../../../scenes/Account'
import { AccountNavigator } from '../stacks/Stacks'

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const DrawerMenu = (props) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.white}
        backgroundColor="pink"
        onPress={() => {
          props.navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    </View>
    <View style={styles.main}>
      {/* <Image
        style={{ height: 30, width: 100, borderColor: 'white' }}
        source={{
          uri: 'data:image/png;base64,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',
        }}
      /> */}

      
      
      {/* <View
        style={{
          flexDirection: 'row',
          height: 70,
          width: 200,
          backgroundColor: 'white',
        }}
      >
        <Image
          style={{ height: 60, width: 60, borderColor: 'black' }}
          source={{
            uri: 'https://png.pngtree.com/png-vector/20190803/ourlarge/pngtree-city-construction-house-flat-color-icon-vector-icon-banner-png-image_1649129.jpg',
          }}
        />
        
        <Text
          style={{ fontSize: 30, paddingTop: 10 }}
          onPress={() => Linking.openURL('https://happypet.co.id')}
        >
          
          Home
        </Text>
      </View> */}


      {/* <View
        style={{
          flexDirection: 'row',
          height: 70,
          width: 200,
          backgroundColor: 'white',
        }}
      >
        <Image
          style={{ height: 40, width: 40 }}
          source={{
            uri: 'https://www.seekpng.com/png/small/72-729929_add-user-group-woman-add-user-icon-png.png',
          }}
        />
        
        <Text
          style={{ fontSize: 30, paddingTop: 0 }}
          onPress={() => Linking.openURL('https://beeplusin.com')}
        >
          Account
        </Text>

        
      </View> */}


      {/* <View
        style={{
          flexDirection: 'row',
          height: 70,
          width: 200,
          backgroundColor: 'white',
        }}
      >
        <Image
          style={{ height: 40, width: 40 }}
          source={{
            uri: 'https://i.pinimg.com/736x/93/4b/79/934b793dd7859f07c3862a38db94d368--custom-icons-footprint.jpg',
          }}
        />
        
        <Text
          style={{ fontSize: 30, paddingTop: 0 }}
          onPress={() => Linking.openURL('https://www.zoho.com/developer')}
        >
          Contact
        </Text>
      </View> */}


      {/* <View
        style={{
          flexDirection: 'row',
          height: 70,
          width: 200,
          backgroundColor: 'white',
        }}
      >
        <Image
          style={{ height: 40, width: 40 }}
          source={{
            uri: 'https://t4.ftcdn.net/jpg/04/21/45/51/360_F_421455125_uq2szZSTeL8LoFZ6QJPBt95Hz8xDgECQ.jpg',
          }}
        />
        
        <Text
          style={{ fontSize: 30, paddingTop: 0 }}
          onPress={() => Linking.openURL('https://www.zoho.com/inventory')}
        >
          Stock
        </Text>
      </View> */}



      {/* <View
        style={{
          flexDirection: 'row',
          height: 70,
          width: 200,
          backgroundColor: 'white',
        }}
      >
        <Image
          style={{ height: 40, width: 40 }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhRIJGALyjZe0oDzkxvJi1lkAANbL8dH9yQ&usqp=CAU',
          }}
        />
      
        <Text
          style={{ fontSize: 30, paddingTop: 0 }}
          onPress={() => Linking.openURL('https://www.zoho.com/crm')}
        >
          Order
        </Text>
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          height: 500,
          width: 200,
          backgroundColor: 'white',
        }}
      >
{/* <Menus/> */}
        <Mainmenu />
      </View>
    </View>
  </SafeAreaView>
)
const TabNavigator = () => (
  <TabNavigator
    screenOption={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Mainmenu':
            return (
              <FontIcon
                name="Mainmenu"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    {/* <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} /> */}
    <Tab.Screen name="Mainmenu" component={MainmenuNavigator} />
  </TabNavigator>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
