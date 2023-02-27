import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import images from '../assets/images';
import CustomButton from '../components/CustomButton';
import fonts from '../constants/fonts';
import {wp} from '../constants/scaling';
import colors from '../constants/theme';
const GettingStartedScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginVertical: moderateScale(20)}}>
        <Image
          source={images.logo_main}
          resizeMode={'contain'}
          style={{width: wp(80), height: wp(40)}}
        />
      </View>
      <View style={{position: 'absolute', bottom: moderateScale(20)}}>
        <CustomButton onPress={() => navigation.replace('LoginScreen')} />
      </View>
    </SafeAreaView>
  );
};

export default GettingStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.Medium,
    fontSize: moderateScale(23),
    textAlign: 'center',
    marginTop: moderateScale(80),
    color: colors.primaryColor,
  },
});
