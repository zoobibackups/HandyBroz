//
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useDispatch} from 'react-redux';
import LOGO from '../assets/svgs/logo.svg';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import fonts from '../constants/fonts';
import {moderateScale, SCREEN_WIDTH, wp} from '../constants/scaling';
import colors from '../constants/theme';
import {userLogin} from '../store/actions/userActions';
const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [useremail, setEmail] = useState(''); //
  const [password, setPassword] = useState(''); //
  const [emailErrorMessage, setEmailErrorMiessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
  const [isloading, setLoading] = useState(false);
  const UserLogin = () => {
    setLoading(false);
    setTimeout(() => {
      dispatch(
        userLogin({
          id: '1',
          first_name: 'Waheeda',
          last_name: 'Raheem',
        }),
      );
      setLoading(false);
    }, 3000);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
      }}>
      <View style={styles.logoContainer}>
        <LOGO width={wp(80)} height={moderateScale(200)} />
      </View>
      <CustomInput
        label={'Username'}
        value={useremail}
        errorMessage={emailErrorMessage}
        onChangeText={text => setEmail(text)}
      />
      <CustomInput
        label={'Password'}
        secureTextEntry={true}
        value={password}
        errorMessage={passwordErrorMessage}
        onChangeText={text => setPassword(text)}
      />
      <View style={{height: moderateScale(10)}}></View>

      <CustomButton
        isloading={isloading}
        title={'Login'}
        onPress={() => UserLogin()}
      />
      <View style={{height: moderateScale(10)}}></View>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.forgotpassword}>Don't have account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(200),
  },
  forgotpassword: {
    marginBottom: moderateScale(5),
    color: colors.primaryColor,
    width: SCREEN_WIDTH,
    textAlign: 'right',
    fontFamily: fonts.Medium,
  },
});
