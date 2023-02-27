import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import images from '../assets/images';
import fonts from '../constants/fonts';
import {SCREEN_WIDTH, wp} from '../constants/scaling';
import colors from '../constants/theme';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginVertical: moderateScale(20)}}>
        <Image
          source={images.logo_main}
          resizeMode={'contain'}
          style={{width: wp(80), height: wp(40)}}
        />
      </View>
      <Text style={styles.headingtext}>this is just a dummy text here</Text>
      <TouchableOpacity
        onPress={() => Alert.alert('Hi There', 'How are your')}
        style={styles.button}>
        <Text style={styles.textButton}>Click Here for Alert</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ShopingCartScreen')}
        style={styles.button}>
        <Text style={styles.textButton}>ShopingCartScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(10),
    backgroundColor: colors.black,
    alignItems: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: SCREEN_WIDTH + moderateScale(10),
    borderColor: '#0008',
    borderRadius: moderateScale(5),
    paddingVertical: 0,
    borderWidth: moderateScale(1),
    height: moderateScale(45),
    fontFamily: fonts.Medium,
    paddingHorizontal: moderateScale(10),
    color: colors.textColor,
  },
  button: {
    width: moderateScale(200),
    height: moderateScale(40),
    justifyContent: 'center',
    flexDirection: 'row',
    bottom: moderateScale(10),
    borderRadius: moderateScale(5),
    right: moderateScale(10),
    alignItems: 'center',
    margin: moderateScale(10),
    backgroundColor: colors.primaryColor,
  },
  headingtext: {
    color: colors.white,
    fontFamily: fonts.Bold,
    paddingLeft: moderateScale(10),
    fontSize: moderateScale(22),
    marginVertical: moderateScale(100),
  },
  textButton: {
    color: colors.white,
    fontFamily: fonts.Bold,
  },
});
