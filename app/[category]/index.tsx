import { idiomsCategoryData } from "@/assets/data/idioms/idiomsCategory";
import { phrasesCategoryData } from "@/assets/data/phrases/phrasesCategory";
import { proverbCategoryData } from "@/assets/data/proverbs/proverbCategories";
import { wordsCategories } from "@/assets/data/words/categories";
import IdiomsCategories from "@/components/idioms/IdiomsCategories";

import PhrasesCategories from "@/components/phrases/PhrasesCategories";
import ProverbCategories from "@/components/proverbs/ProverbCategories";
import WordsCategories from "@/components/words/WordsCategories";

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
    return <IdiomsCategories data={idiomsCategoryData} />;
  }
  if (category === "Phrases") {
    return <PhrasesCategories data={phrasesCategoryData} />;
  }
  if (category === "Proverbs") {
    return <ProverbCategories data={proverbCategoryData} />;
  }
  if (category === "Words") {
    return <WordsCategories data={wordsCategories} />;
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
