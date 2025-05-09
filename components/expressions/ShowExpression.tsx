
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Platform,
  TextStyle,
  Pressable,
} from "react-native";
import * as Speech from "expo-speech";
import { useTheme } from "@/hooks/theme";

export default function ShowExpression({ sentences }: any) {
  const { theme, bg, bgCard } = useTheme();
  const isDark = theme === "dark";

  const [isSpeaking, setIsSpeaking] = useState<boolean>(false); // Track if speech is currently playing
  const [currentSentence, setCurrentSentence] = useState<string>(""); // Track the currently speaking sentence

  const themedStyles = {
    card: {
      flexDirection: "row" as const,
      justifyContent: "flex-start" as const,
      alignItems: "flex-start" as TextStyle["alignItems"], // Align items to the top of the container
      padding: 22,
      marginHorizontal: 16,
      marginBottom: 3,
      backgroundColor: bgCard,
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
        },
        android: {
          elevation: 2,
        },
      }),
    },
    text: {
      color: isDark ? "#fff" : "#333",
      fontSize: 18,
      fontWeight: "500" as TextStyle["fontWeight"],
    },
    container: {
      flex: 1,
      backgroundColor: bg,
      paddingTop: 16,
    },
    wordText: {
      flex: 1,
      marginLeft: 12,
      flexWrap: "wrap" as TextStyle["flexWrap"], // Allow text wrapping if necessary
    },
    idText: {
      marginRight: 8, // Space between the number and the word
    },
  };

  const speakWord = (word: string) => {
    if (isSpeaking && currentSentence === word) {
      // If the same word is clicked again, stop it
      Speech.stop();
      setIsSpeaking(false);
    } else {
      // Stop any ongoing speech
      Speech.stop();

      // Start speaking the new word
      Speech.speak(word);
      setIsSpeaking(true);
      setCurrentSentence(word);
    }
  };

  // Stop speech when the screen goes out of focus (i.e., the user goes back)
  useEffect(() => {
    return () => {
      Speech.stop(); // Stop speech immediately when component unmounts
    };
  }, []);

  return (
    <View style={themedStyles.container}>
      <FlatList
        data={sentences}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => speakWord(item.word)}
            android_ripple={{ color: "#ccc" }}
            style={themedStyles.card}
          >
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text style={[themedStyles.text, themedStyles.idText]}>
                {item.id}.
              </Text>
              <Text style={[themedStyles.text, themedStyles.wordText]}>
                {item.word}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}













