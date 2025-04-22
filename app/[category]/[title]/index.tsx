import IdiomsController from "@/components/idioms/IdiomsController";
import PhrasesController from "@/components/phrases/PhrasesController";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Index = () => {
  const { category, title } = useLocalSearchParams();


if(category==='Idioms'&& title){
    return <IdiomsController />
}


if(category==='Phrases'&& title){
    return <PhrasesController />
}
if(category==='Proverbs'&& title){
    return <PhrasesController />
}


  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;






























