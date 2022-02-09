import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Router from './routes'
// import axios from 'axios'

const App = () => {
  // state
  const [didLoad, setDidLoad] = useState(false)
  // const getdatazoho = () => {
  //   axios
  //     .post(
  //       'https://accounts.zoho.in/oauth/v2/auth?scope=ZohoBooks.salesorders.READ&client_id=1000.JIYVUM7G1R4YMUTV85MYEF377H18BN&response_type=code&redirect_uri =https://happypet-happydog.co.id/home2',
  //     )
  //     .then(function (resii) {
  //       console.log(resii)
  //     })
  // }

  // handler
  const handleLoadAssets = async () => {
    // assets preloading
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  // lifecycle
  useEffect(() => {
    handleLoadAssets()
  }, [])

  // rendering
  if (!didLoad) return <View />
  return (
    <Provider store={store}>
      {/* <getdatazoho /> */}
      <Router />
    </Provider>
  )
}

export default App
