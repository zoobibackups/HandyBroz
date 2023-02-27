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
import {SCREEN_WIDTH, wp} from '../constants/scaling';
import colors from '../constants/theme';
const SupportDetailsScreen3 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingtext}>Hello World</Text>

      <View
        style={{
          position: 'absolute',
          alignItems: 'center',
          width: wp(100),
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          bottom: moderateScale(30),
        }}>
        <CustomButton
          title={'Click'}
          buttonStyle={{
            borderRadius: moderateScale(5),
            width: SCREEN_WIDTH / 2.3,
          }}
        />
        <CustomButton
          title={'Click'}
          buttonStyle={{
            borderRadius: moderateScale(5),
            width: SCREEN_WIDTH / 2.3,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SupportDetailsScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingtext: {
    color: colors.white,
    fontFamily: fonts.Bold,
    textAlign: 'center',
    fontSize: moderateScale(16),
    marginVertical: moderateScale(10),
  },
});
