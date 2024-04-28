/* eslint-disable quotes */
/* eslint-disable semi */

import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import MyStack from "./src/navigation"

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default App
