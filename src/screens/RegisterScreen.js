//
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import LOGO from '../assets/svgs/logo.svg';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import fonts from '../constants/fonts';
import {moderateScale, SCREEN_WIDTH, wp} from '../constants/scaling';
import colors from '../constants/theme';
const RegisterScreen = ({navigation}) => {
  const [first_name, setFirstName] = useState('');
  const [isloading, setLoading] = useState(false);

  const [last_name, setLastName] = useState('');

  const [useremail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMiessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const registerUser = () => {};
  return (
    <KeyboardAwareScrollView
      style={{flex: 1, backgroundColor: '#fff'}}
      bounces={false}>
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
          label={'First Name'}
          value={first_name}
          errorMessage={emailErrorMessage}
          onChangeText={text => setFirstName(text)}
        />
        <CustomInput
          label={'Last Name'}
          value={last_name}
          errorMessage={emailErrorMessage}
          onChangeText={text => setLastName(text)}
        />
        <CustomInput
          label={'Email'}
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
          title={'Register'}
          onPress={() => registerUser()}
        />
        <View style={{height: moderateScale(10)}}></View>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.forgotpassword}>Already have account? Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;

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
