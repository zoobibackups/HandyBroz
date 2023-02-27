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
const ShopingCartScreen = ({navigation}) => {
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
        onPress={() => navigation.navigate('CartDetailsScreen')}
        style={{alignSelf: 'center', marginVertical: moderateScale(30)}}>
        <Image
          source={images.shopping}
          resizeMode={'contain'}
          style={{width: wp(80), height: wp(30)}}
        />
        <Text style={styles.headingtext}>Check Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SupportDetailsScreen')}
        style={{alignSelf: 'center', marginVertical: moderateScale(30)}}>
        <Image
          source={images.support}
          resizeMode={'contain'}
          style={{width: wp(80), height: wp(30)}}
        />
        <Text style={styles.headingtext}>Support</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ShopingCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  headingtext: {
    color: colors.white,
    fontFamily: fonts.Bold,
    textAlign: 'center',
    fontSize: moderateScale(16),
    marginVertical: moderateScale(10),
  },
});
