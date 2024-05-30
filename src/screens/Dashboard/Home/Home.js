import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../../components';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/Reducers/AuthReducer';
import { CommonStyles } from '../../../utility';
import styles from './styles';
import Routes from '../../../navigation/Routes';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={[CommonStyles.BODY,styles.cont]}>

      <Text style={styles.titleText}>
        Welcome Alex
      </Text>

      <Button 
      text={"Mark Attendance"}
      onPress={()=>{
        navigation.navigate(Routes.ATTENDANCE)
      }}
      style={styles.button}

      />
   
    </View>
  );
}

export default Home;
