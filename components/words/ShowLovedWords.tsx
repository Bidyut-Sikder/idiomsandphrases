import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from "react-native";
import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/theme";
import { FlashList } from "@shopify/flash-list";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ShowLovedWords({ dataList, storageKey }: any) {
  const [lovedIds, setLovedIds] = useState<number[]>([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [loading, setLoading] = useState(true);

  const handleSpeak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: "en", rate: 0.8 });
  };

  useEffect(() => {
    const loadLovedWords = async () => {
      const json = await AsyncStorage.getItem(storageKey);
      if (json) setLovedIds(JSON.parse(json));
      setLoading(false);
    };
    loadLovedWords();
  }, []);

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  const toggleLove = async (id: number) => {
    let updated: number[] = [];
    if (lovedIds.includes(id)) {
      updated = lovedIds.filter((i) => i !== id);
    } else {
      updated = [...lovedIds, id];
    }
    setLovedIds(updated);
    await AsyncStorage.setItem(storageKey, JSON.stringify(updated));
  };

  const lovedWords = dataList.filter((item: any) => lovedIds.includes(item.id));

  if (loading) {
    return (
      <View >
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    list: {
      padding: 12,
    },
    card: {
      backgroundColor: isDark ? "#2c2c2e" : "#ffffff",
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        android: {
          elevation: 3,
        },
      }),
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    wordSection: {
      flexDirection: "row",
      alignItems: "center",
    },
    id: {
      fontWeight: "bold",
      fontSize: 18,
      marginRight: 8,
      color: isDark ? "#fff" : "#333",
    },
    word: {
      fontSize: 20,
      fontWeight: "600",
      color: isDark ? "#fff" : "#333",
    },
    iconRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    label: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 5,
      color: isDark ? "#ccc" : "#555",
    },
    text: {
      fontSize: 17,
      color: isDark ? "#eee" : "#333",
    },
    chipContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 1,
      gap: 6,
    },
    chip: {
      backgroundColor: isDark ? "#444" : "#e0e0e0",
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 16,
      fontSize: 13,
      color: isDark ? "#ddd" : "#333",
    },
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const renderItem = ({ item }: { item: (typeof dataList)[0] }) => (
    <View style={styles.card}>
      {/* Word and Icons */}
      <View style={styles.header}>
        <View style={styles.wordSection}>
          <Text style={styles.id}>{item.id}.</Text>
          <Text style={styles.word}>{item.word}</Text>
        </View>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => toggleLove(item.id)} style={{ marginRight: 12 }}>
            <Ionicons
              name={lovedIds.includes(item.id) ? "heart" : "heart-outline"}
              size={24}
              color={lovedIds.includes(item.id) ? "red" : isDark ? "#888" : "#444"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSpeak(item.word)}>
            <Ionicons
              name="volume-high-outline"
              size={26}
              color={isDark ? "#fff" : "#000"}
            />
          </TouchableOpacity>
        </View>
      </View>
  
      {/* Meaning */}
      <View style={styles.header}>
        <Text style={styles.label}>📖 Meaning</Text>
        <TouchableOpacity onPress={() => handleSpeak(item.meaning)}>
          <Ionicons
            name="volume-high-outline"
            size={22}
            color={isDark ? "#fff" : "#000"}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{item.meaning}</Text>
  
      {/* Synonyms */}
      <View style={styles.header}>
        <Text style={styles.label}>✅ Synonyms</Text>
        <TouchableOpacity onPress={() => handleSpeak(item.synonyms)}>
          <Ionicons
            name="volume-high-outline"
            size={22}
            color={isDark ? "#fff" : "#000"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.chipContainer}>
        {item.synonyms.split(",").map((syn: string, index: number) => (
          <Text key={index} style={styles.text}>
            {syn.trim()},
          </Text>
        ))}
      </View>
  
      {/* Antonyms */}
      <View style={styles.header}>
        <Text style={styles.label}>✅ Antonyms</Text>
        <TouchableOpacity onPress={() => handleSpeak(item.antonyms)}>
          <Ionicons
            name="volume-high-outline"
            size={22}
            color={isDark ? "#fff" : "#000"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.chipContainer}>
        {item.antonyms.split(",").map((ant: string, index: number) => (
          <Text key={index} style={styles.text}>
            {ant.trim()},
          </Text>
        ))}
      </View>
    </View>
  );
  
  return (
    <View style={{ flex: 1, backgroundColor: isDark ? "#1a1a1a" : "#f7f7f7" }}>
      <FlashList
        data={lovedWords}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        estimatedItemSize={140}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
}
