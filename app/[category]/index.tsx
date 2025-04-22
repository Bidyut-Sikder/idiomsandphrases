import { idiomsCategoryData } from "@/assets/data/idioms/idiomsCategory";
import { phrasesCategoryData } from "@/assets/data/phrases/phrasesCategory";
import { proverbsCategoryData } from "@/assets/data/proverbs/proverbsCategory";
import StartsWith from "@/components/common/StartsWith";

import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";


const Index = () => {
  const { category } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (category) {
      navigation.setOptions({ title: decodeURIComponent(category as string) });
    }
  }, [category]);

  if (category === "Idioms") {
    return <StartsWith data={idiomsCategoryData} />;
  }
  if (category === "Phrases") {
    return <StartsWith data={phrasesCategoryData} />;
  }
  if (category === "Proverbs") {
    return <StartsWith data={proverbsCategoryData} />;
  }
  if (category === "Words") {
    return <Text>Words</Text>;
  }

  if (category === "Slangs") {
    return <Text>Words</Text>;
  }

  if (category === "Beginner") {
    return <Text>Beginner</Text>;
  }
  if (category === "Intermediate") {
    return <Text>Intermediate</Text>;
  }
  if (category === "Words") {
    return <Text>Words</Text>;
  }
  if (category === "Advanced") {
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
