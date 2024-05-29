import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icons } from '../../../assets';
import { CommonStyles, UtilityMethods } from '../../../utility';
import { Button, CustomizedInput, ScreenWrapper } from '../../../components';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.cont}>
     <ScreenWrapper>
     <View style={{alignSelf:"center"}} >
    <Icons.Login width={UtilityMethods.wp(80)}
     height={UtilityMethods.wp(70)}
    />

    </View>

    <CustomizedInput
   
     type={"email"}
      value={email}
      placeholder={"Email"}
      onChangeText={(text) => setEmail(text)}
    />

    <CustomizedInput
      type={"password"}
      value={password}
      placeholder={"Password"}
      onChangeText={(text) => setPassword(text)}

    />

     <Button
      text={"Login"}
      onPress={() => console.log("Login")}
      style={{marginTop:UtilityMethods.hp(2)}}


    />

     <View style={[CommonStyles.ROW_VIEW,styles.linkView]}>
      <Text style={styles.linkText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => console.log("Sign Up")}>
        <Text style={[styles.linkText,CommonStyles.BOLD]}>Sign Up</Text>
      </TouchableOpacity>
     </View>
   

     </ScreenWrapper>
   
    </View>
  );
}

export default Login;
