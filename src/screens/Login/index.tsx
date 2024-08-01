import React, { useState } from "react";
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from "react-native";
import {MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from './styles';
import { colors } from "../../styles/GlobalStyles";
import { ComponentButtonInterface } from '../../components';
import { LoginTypes } from "../../navigations/login.navigation";
import { useAuth } from "../../hook/auth";
import { AxiosError } from "axios";

export interface IAuthenticate {
  email?: string;
  password?: string;
}
export function Login({ navigation }: LoginTypes){
  const [data, setData] = useState<IAuthenticate>();
  const {signIn, setLoading} = useAuth();
  async function handleSignIn(){
    if(data?.email && data.password){
      setLoading(true)
      try{
        await signIn(data)
      } catch (error) {
        const err = error as AxiosError
        const msg = err.response?.data as string
        Alert.alert(msg)
      }
      setLoading(false)
    } else {
      Alert.alert("Preencha todos os campos!!!");
    }
  }
}
