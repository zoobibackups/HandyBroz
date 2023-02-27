import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../components/CustomButton';
import fonts from '../constants/fonts';
import {wp} from '../constants/scaling';
import colors from '../constants/theme';
const CartDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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

export default CartDetailsScreen;

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
