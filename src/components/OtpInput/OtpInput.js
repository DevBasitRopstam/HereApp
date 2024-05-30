// FourDigitOTPInput.js

import React, { useState, useRef } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'



import { CommonStyles, UtilityMethods } from '../../utility'
import { Colors } from '../../assets'

let wp = UtilityMethods.wp
let hp = UtilityMethods.hp
const OtpInput = ({ onComplete }) => {
   
  const [digit1, setDigit1] = useState('')
  const [digit2, setDigit2] = useState('')
  const [digit3, setDigit3] = useState('')
  const [digit4, setDigit4] = useState('')
  const digit2Ref = useRef()
  const digit3Ref = useRef()
  const digit4Ref = useRef()

  const handleDigit1Change = (text) => {
    setDigit1(text)
    if (text.length === 1) {
      digit2Ref.current.focus()
    }
  }

  const handleDigit2Change = (text) => {
    setDigit2(text)
    if (text.length === 1) {
      digit3Ref.current.focus()
    }
  }

  const handleDigit3Change = (text) => {
    setDigit3(text)
    if (text.length === 1) {
      digit4Ref.current.focus()
    }
  }

  const handleDigit4Change = (text) => {
    setDigit4(text)
    if (text.length === 1) {
      onComplete(`${digit1}${digit2}${digit3}${text}`)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={handleDigit1Change}
        value={digit1}
        autoFocus
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={handleDigit2Change}
        value={digit2}
        ref={digit2Ref}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={handleDigit3Change}
        value={digit3}
        ref={digit3Ref}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={handleDigit4Change}
        value={digit4}
        ref={digit4Ref}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {

    ...CommonStyles.REGULAR,
    borderRadius: UtilityMethods.hp(1),
 
    width: wp(15),
    height: wp(15),
    textAlign: 'center',
    backgroundColor: Colors.GRAY_06,
    color: Colors.BLACK,
    
  },
})

export default OtpInput