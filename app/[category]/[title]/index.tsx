import AdvancedExpressionceController from "@/components/expressions/AdvancedExpressionController";
import BeginnerExpressionController from "@/components/expressions/BeginnerExpressionController";
import IdiomsController from "@/components/idioms/IdiomsController";
import PhrasesController from "@/components/phrases/PhrasesController";
import ProverbsController from "@/components/proverbs/ProverbsController";
import SlangsController from "@/components/slangs/SlangsController";
import WordsController from "@/components/words/WordsController";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Index = () => {
  const { category, title } = useLocalSearchParams();
  const navigation = useNavigation();
  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: decodeURIComponent(title as string) });
    }
  }, [title]);
  if (category === "Idioms" && title) {
    return <IdiomsController />;
  }

  if (category === "Phrases" && title) {
    return <PhrasesController />;
  }
  if (category === "Proverbs" && title) {
    return <ProverbsController />;
  }
  if (category === "Words" && title) {
    return <WordsController />;
  }

  if (category === "Slangs" && title) {
    return <SlangsController />;
  }
  if (category === "Beginner" && title) {
    return (
      <BeginnerExpressionController
        title={Array.isArray(title) ? title.join(", ") : title}
      />
    );
  }

  if (category === "Advanced" && title) {
    return (
      <AdvancedExpressionceController
        title={Array.isArray(title) ? title.join(", ") : title}
      />
    );
  }


  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
