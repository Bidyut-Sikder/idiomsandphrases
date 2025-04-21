import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  const { slug } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (slug) {
      navigation.setOptions({ title: decodeURIComponent(slug as string) });
    }
  }, [slug]);

  if (slug === "Idioms") {
    return <Text>Idioms</Text>;
  }
  if (slug === "Phrases") {
    return <Text>Phrases</Text>;
  }
  if (slug === "Proverbs") {
    return <Text>Proverbs</Text>;
  }
  if (slug === "Words") {
    return <Text>Words</Text>;
  }

  if (slug === "Slangs") {
    return <Text>Words</Text>;
  }

  if (slug === "Beginner") {
    return <Text>Beginner</Text>;
  }
  if (slug === "Intermediate") {
    return <Text>Intermediate</Text>;
  }
  if (slug === "Words") {
    return <Text>Words</Text>;
  }
  if (slug === "Advanced") {
    return <Text>Advanced</Text>;
  }

  return (
    <View>
      <Text>No Data Found!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
