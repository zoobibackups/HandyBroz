import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import images from '../assets/images';
import CustomButton from '../components/CustomButton';
import fonts from '../constants/fonts';
import {wp} from '../constants/scaling';
import colors from '../constants/theme';
const CheckCartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignSelf: 'center', marginVertical: moderateScale(20)}}>
        <Image
          source={images.logo_main}
          resizeMode={'contain'}
          style={{width: wp(80), height: wp(40)}}
        />
      </View>
      <Text style={styles.headingtext}>Hello World</Text>
      <TouchableOpacity
        style={{alignSelf: 'center', marginVertical: moderateScale(30)}}>
        <Image
          source={images.salessupport}
          resizeMode={'contain'}
          style={{width: wp(80), height: wp(35)}}
        />
        <Text style={styles.headingtext}>Check Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{alignSelf: 'center', marginVertical: moderateScale(30)}}>
        <Image
          source={images.techSupport}
          resizeMode={'contain'}
          style={{width: wp(80), height: wp(30)}}
        />
        <Text style={styles.headingtext}>Support</Text>
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          alignItems: 'center',
          width: wp(100),
          bottom: moderateScale(30),
        }}>
        <CustomButton
          title={'Click Here'}
          buttonStyle={{
            borderRadius: moderateScale(5),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CheckCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingBottom: moderateScale(30),
  },
  headingtext: {
    color: colors.white,
    fontFamily: fonts.Bold,
    textAlign: 'center',
    fontSize: moderateScale(16),
    marginVertical: moderateScale(10),
  },
});
