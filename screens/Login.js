import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Formik} from 'formik';
import {View} from 'react-native';
import {Octicons} from '@expo/vector-icons';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyleFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors
} from './../components/styles';

//colors
const {brand} = Colors;

const Login = () => {
  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        <PageLogo resizeMode='cover' source={require('./../assets/img/map.jpeg')} />
        <PageTitle>My Journey App</PageTitle>
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValue={{email: '', password: ''}}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (<StyleFormArea>
            
          </StyleFormArea>)}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({label, icons, ...props}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  )
}

export default Login;