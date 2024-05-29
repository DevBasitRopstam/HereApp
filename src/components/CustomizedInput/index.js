import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Image, Pressable, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { Colors, Icons, Images } from '../../assets';
import styles from './styles';
import { UtilityMethods, CommonStyles, FontSize } from '../../utility';
import { useFocusEffect } from '@react-navigation/native';


export const InputTypes = {
  EMAIL: 'email',
  PASSWORD: 'password',
  TEXT: 'text',
  PICKER: 'picker',
  PHONE_NUMBER: 'phone',
  NAME: 'name',
};


export const CustomizedInput = ({
  type,
  LeftIcon,
  RightIcon,
  RightIconType = 'svg',
  style,
  keyboardType,
  onPress,
  InputContStyle,
  isInValidField = false,
  setIsInValidField,
  Error,
  setError,
  FirstScreen = true,
  maxLength,
  inputWithBorder = false,
  iconSource,
  TextArea = false,
  iconStyle,
  inputContStyle,
  onFocus,
  optional,
  countryCode,
  onChangeCountryCode,
  inputStyle,
  titleStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const inputRef = useRef(null);
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState('🇺🇸');
  const onSelect = (country) => {};
  useFocusEffect(
    useCallback(() => {
      if (FirstScreen) {
        setTimeout(() => {
          inputRef?.current?.focus();
        }, 500);
      } else {
        inputRef?.current?.focus();
      }
    }, []),
  );
  return (
    <View style={[styles.mainCont, style]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
        }}
      >
        {show && (
          <View style={{ position: 'absolute', zIndex: -99, left: -9000 }}>
           
          </View>
        )}
        <Text style={[inputWithBorder ? styles.TitleTextWithBorder : styles.TitleStyle, titleStyle]}>{props?.title}</Text>
        {optional && (
          <Text
            style={{
              color: 'gray',
            }}
          >
            {' '}
            (optional)
          </Text>
        )}
      </View>
      <View
        style={{
          height: props?.title ? UtilityMethods.hp(1) : null,
        }}
      />
      {inputWithBorder ? (
        <>
          {!TextArea ? (
            <View style={[styles.inputWithBorder, inputContStyle]}>
              <View style={styles.iconView}>
                <View style={styles.roundCount}>
                  <Image source={iconSource} style={[styles.roundIcon, iconStyle]} />
                </View>
              </View>
              <TextInput
                style={styles.textInputView}
                value={props?.value}
                onChangeText={props?.onChangeText}
                placeholder={props?.placeholder}
                placeholderTextColor={Colors.DARK_GRAY}
                keyboardType={keyboardType}
              />
            </View>
          ) : (
            <TextInput
              style={styles.inputWithBorderTextArea}
              value={props?.value}
              onChangeText={props?.onChangeText}
              placeholder={props?.placeholder}
              placeholderTextColor={Colors.DARK_GRAY}
              multiline={true}
              numberOfLines={4}
            />
          )}
        </>
      ) : (
        <View style={[styles.container(isInValidField), InputContStyle]}>
          {LeftIcon && (
            <>
              <LeftIcon width={UtilityMethods.hp(15)} height={UtilityMethods.hp(15)} />
              <View style={{ width: 10 }} />
            </>
          )}
          {type == InputTypes.PHONE_NUMBER && (
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={{
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.VALUE(16),
                  ...CommonStyles.MEDIUM,
                  marginRight: 5,
                }}
              >
                {flag} {countryCode}
              </Text>
              <Image
                resizeMode="contain"
                source={Images.DOWN_ARROW}
                style={{
                  width: UtilityMethods.wp(5),
                  height: UtilityMethods.wp(5),
                  marginRight: 5,
                }}
              />
            </TouchableOpacity>
          )}

          <View style={{ flex: 1 }}>
            {type == InputTypes.PICKER ? (
              <Pressable style={{ width: UtilityMethods.wp(90) }} onPress={onPress}>
                <Text
                  style={{
                    color: props?.value?.length ? Colors.BLACK : Colors.PLACEHOLDER_COLOR,
                    fontSize: FontSize.VALUE(16),
                    ...CommonStyles.MEDIUM,
                  }}
                >
                  {props?.value?.length ? props?.value : props?.placeholder}
                </Text>
              </Pressable>
            ) : (
              <TextInput
                ref={inputRef}
                onFocus={onFocus}
                style={[styles.input, inputStyle]}
                secureTextEntry={type === InputTypes.PASSWORD && showPassword}
                keyboardType={type === InputTypes.EMAIL ? 'email-address' : keyboardType}
                placeholderTextColor={Colors.PLACEHOLDERTEXTCOLOR}
                numberOfLines={1}
                maxLength={maxLength ? maxLength : 40}
                autoCapitalize={InputTypes.EMAIL ? 'none' : props?.autoCapitalize}
                {...props}
              />
            )}
          </View>

          {RightIcon && RightIconType === 'svg' && <RightIcon width={UtilityMethods.wp(15)} height={UtilityMethods.wp(15)} />}
          {RightIcon && RightIconType === 'png' && (
            <Image
              source={RightIcon}
              style={{
                width: UtilityMethods.wp(5),
                height: UtilityMethods.wp(5),
              }}
            />
          )}
          {type === InputTypes.PASSWORD && (
            <TouchableOpacity onPress={() => setShowPassword((p) => !p)}>
              {showPassword ? (
                <Image source={Images.EYE_CLOSE} style={styles.eyeIcon} />
              ) : (
                <Image source={Images.EYE_OPEN} style={styles.eyeIcon} />
              )}
            </TouchableOpacity>
          )}
        </View>
      )}
      {Error?.length > 0 ? <Text style={styles.ErrorText}>{Error}</Text> : null}
    </View>
  );
};

CustomizedInput.propTypes = {
  type: PropTypes.oneOf(Object.values(InputTypes)).isRequired,
  LeftIcon: PropTypes.element,
  style: PropTypes.object,
};
