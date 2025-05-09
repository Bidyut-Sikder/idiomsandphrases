import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/theme";
import { FlashList } from "@shopify/flash-list";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ShowWords({ dataList, storageKey }: any) {
  const [lovedIds, setLovedIds] = useState<number[]>([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSpeak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: "en", rate: 0.8 });
  };

  useEffect(() => {
    const loadLovedWords = async () => {
      const json = await AsyncStorage.getItem(storageKey);
      if (json) setLovedIds(JSON.parse(json));
    };
    loadLovedWords();
  }, []);

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  const toggleLove = async (id: number) => {
    const updated = lovedIds.includes(id)
      ? lovedIds.filter((item) => item !== id)
      : [...lovedIds, id];
    setLovedIds(updated);
    await AsyncStorage.setItem(storageKey, JSON.stringify(updated));
  };

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
  });

  const renderItem = ({ item }: { item: (typeof dataList)[0] }) => (
    <View style={styles.card}>
      {/* Header with word, heart, and speaker */}
      <View style={styles.header}>
        <View style={styles.wordSection}>
          <Text style={styles.id}>{item.id}.</Text>
          <Text style={styles.word}>{item.word}</Text>
        </View>

        <View style={styles.iconRow}>
          {/* ❤️ Toggle button */}
          <TouchableOpacity onPress={() => toggleLove(item.id)} style={{ marginRight: 12 }}>
            <Ionicons
              name={lovedIds.includes(item.id) ? "heart" : "heart-outline"}
              size={24}
              color={lovedIds.includes(item.id) ? "red" : isDark ? "#aaa" : "#333"}
            />
          </TouchableOpacity>

          {/* 🔊 Word speaker */}
          <TouchableOpacity onPress={() => handleSpeak(item.word)}>
            <Ionicons
              name="volume-high-outline"
              size={26}
              color={isDark ? "#fff" : "#000"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Meaning section */}
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

      {/* Synonyms section */}
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

      {/* Antonyms section */}
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
        data={dataList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        estimatedItemSize={140}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={true}
        extraData={lovedIds}
      />
    </View>
  );
}



////////////////////

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Platform,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as Speech from "expo-speech";
// import { Ionicons } from "@expo/vector-icons";
// import { useTheme } from "@/hooks/theme";
// import { FlashList } from "@shopify/flash-list";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// export default function ShowSynonymsAntonyms({ dataList, storageKey }: any) {
//   const [lovedIds, setLovedIds] = useState<number[]>([]);
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   // Handle speech start and stop functionality
//   const handleSpeak = (text: string) => {
//     Speech.stop(); // Stop any ongoing speech
//     Speech.speak(text, { language: "en", rate: 0.8 }); // Start new speech
//   };

//   const styles = StyleSheet.create({
//     list: {
//       padding: 12,
//     },
//     card: {
//       backgroundColor: isDark ? "#2c2c2e" : "#ffffff",
//       borderRadius: 12,
//       padding: 16,
//       marginBottom: 16,
//       ...Platform.select({
//         ios: {
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 3 },
//           shadowOpacity: 0.1,
//           shadowRadius: 4,
//         },
//         android: {
//           elevation: 3,
//         },
//       }),
//     },
//     header: {
//       flexDirection: "row",
//       alignItems: "center",
//       justifyContent: "space-between",
//       marginBottom: 10,
//     },
//     wordSection: {
//       flexDirection: "row",
//       alignItems: "center",
//     },
//     id: {
//       fontWeight: "bold",
//       fontSize: 16,
//       marginRight: 8,
//       color: isDark ? "#fff" : "#333",
//     },
//     word: {
//       fontSize: 20,
//       fontWeight: "600",
//       color: isDark ? "#fff" : "#333",
//     },
//     iconRow: {
//       flexDirection: "row",
//       alignItems: "center",
//     },
//     label: {
//       fontSize: 16,
//       fontWeight: "bold",
//       marginTop: 10,
//       color: isDark ? "#ccc" : "#555",
//     },
//     text: {
//       fontSize: 15,
//       color: isDark ? "#eee" : "#333",
//     },
//     chipContainer: {
//       flexDirection: "row",
//       flexWrap: "wrap",
//       marginTop: 4,
//       gap: 6,
//     },
//     chip: {
//       backgroundColor: isDark ? "#444" : "#e0e0e0",
//       paddingHorizontal: 10,
//       paddingVertical: 4,
//       borderRadius: 16,
//       fontSize: 13,
//       color: isDark ? "#ddd" : "#333",
//     },
//   });

//   const renderItem = ({ item }: { item: (typeof dataList)[0] }) => (
//     <View style={styles.card}>

//       {/* Header with word and speaker */}
//       <View style={styles.header}>
//         <View style={styles.wordSection}>
//           <Text style={styles.id}>{item.id}.</Text>
//           <Text style={styles.word}>{item.word}</Text>
//         </View>
//         <TouchableOpacity onPress={() => handleSpeak(item.word)}>
//           <Ionicons
//             name="volume-high-outline"
//             size={26}
//             color={isDark ? "#fff" : "#000"}
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Meaning section with speaker */}
//       <View style={styles.header}>
//         <Text style={styles.label}>📖 Meaning</Text>
//         <TouchableOpacity onPress={() => handleSpeak(item.meaning)}>
//           <Ionicons
//             name="volume-high-outline"
//             size={22}
//             color={isDark ? "#fff" : "#000"}
//           />
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.text}>{item.meaning}</Text>

//       {/* Synonyms section with speaker */}
//       <View style={styles.header}>
//         <Text style={styles.label}>✅ Synonyms</Text>
//         <TouchableOpacity onPress={() => handleSpeak(item.synonyms)}>
//           <Ionicons
//             name="volume-high-outline"
//             size={22}
//             color={isDark ? "#fff" : "#000"}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.chipContainer}>
//         {item.synonyms.split(",").map((syn: string, index: number) => (
//           <Text key={index} style={styles.text}>
//             {syn.trim()},
//           </Text>
//         ))}
//       </View>

//       {/* Antonyms section with speaker */}
//       <View style={styles.header}>
//         <Text style={styles.label}>✅ Antonyms</Text>
//         <TouchableOpacity onPress={() => handleSpeak(item.antonyms)}>
//           <Ionicons
//             name="volume-high-outline"
//             size={22}
//             color={isDark ? "#fff" : "#000"}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.chipContainer}>
//         {item.antonyms.split(",").map((ant: string, index: number) => (
//           <Text key={index} style={styles.text}>
//             {ant.trim()},
//           </Text>
//         ))}
//       </View>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1, backgroundColor: isDark ? "#1a1a1a" : "#f7f7f7" }}>
//       <FlashList
//         data={dataList}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//         estimatedItemSize={140}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={true}
//         extraData={lovedIds}
//       />
//     </View>
//   );
// }











///////////////////////


// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Platform,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as Speech from "expo-speech";
// import { Ionicons } from "@expo/vector-icons";
// import { useTheme } from "@/hooks/theme";
// import { FlashList } from "@shopify/flash-list";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// export default function ShowSynonymsAntonyms({ dataList, storageKey }: any) {
//   const [lovedIds, setLovedIds] = useState<number[]>([]);
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const handleSpeak = (text: string) => {
//     Speech.speak(text, { language: "en", rate: 0.8 });
//   };

//   const styles = StyleSheet.create({
//     list: {
//       padding: 12,
//     },
//     card: {
//       backgroundColor: isDark ? "#2c2c2e" : "#ffffff",
//       borderRadius: 12,
//       padding: 16,
//       marginBottom: 16,
//       ...Platform.select({
//         ios: {
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 3 },
//           shadowOpacity: 0.1,
//           shadowRadius: 4,
//         },
//         android: {
//           elevation: 3,
//         },
//       }),
//     },
//     header: {
//       flexDirection: "row",
//       alignItems: "center",
//       justifyContent: "space-between",
//       marginBottom: 10,
//     },
//     wordSection: {
//       flexDirection: "row",
//       alignItems: "center",
//     },
//     id: {
//       fontWeight: "bold",
//       fontSize: 16,
//       marginRight: 8,
//       color: isDark ? "#fff" : "#333",
//     },
//     word: {
//       fontSize: 20,
//       fontWeight: "600",
//       color: isDark ? "#fff" : "#333",
//     },
//     iconRow: {
//       flexDirection: "row",
//       alignItems: "center",
//     },
//     label: {
//       fontSize: 16,
//       fontWeight: "bold",
//       marginTop: 10,
//       color: isDark ? "#ccc" : "#555",
//     },
//     text: {
//       fontSize: 15,
//       color: isDark ? "#eee" : "#333",
//     },
//     chipContainer: {
//       flexDirection: "row",
//       flexWrap: "wrap",
//       marginTop: 4,
//       gap: 6,
//     },
//     chip: {
//       backgroundColor: isDark ? "#444" : "#e0e0e0",
//       paddingHorizontal: 10,
//       paddingVertical: 4,
//       borderRadius: 16,
//       fontSize: 13,
//       color: isDark ? "#ddd" : "#333",
//     },
//   });

//   const renderItem = ({ item }: { item: (typeof dataList)[0] }) => (
//     <View style={styles.card}>

//       {/* Header with word and speaker */}
//       <View style={styles.header}>
//         <View style={styles.wordSection}>
//           <Text style={styles.id}>{item.id}.</Text>
//           <Text style={styles.word}>{item.word}</Text>
//         </View>
//         <TouchableOpacity onPress={() => handleSpeak(item.word)}>
//           <Ionicons
//             name="volume-high-outline"
//             size={26}
//             color={isDark ? "#fff" : "#000"}
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Meaning section with speaker */}
//       <View style={styles.header}>
//         <Text style={styles.label}>📖 Meaning</Text>
//         <TouchableOpacity onPress={() => handleSpeak(item.meaning)}>
//           <Ionicons
//             name="volume-high-outline"
//             size={22}
//             color={isDark ? "#fff" : "#000"}
//           />
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.text}>{item.meaning}</Text>

//       {/* Synonyms section with speaker */}
//       <View style={styles.header}>
//         <Text style={styles.label}>✅ Synonyms</Text>
//         <TouchableOpacity onPress={() => handleSpeak(item.synonyms)}>
//           <Ionicons
//             name="volume-high-outline"
//             size={22}
//             color={isDark ? "#fff" : "#000"}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.chipContainer}>
//         {item.synonyms.split(",").map((syn: string, index: number) => (
//           <Text key={index} style={styles.text}>
//             {syn.trim()},
//           </Text>
//         ))}
//       </View>

//       {/* Antonyms section with speaker */}
//       <View style={styles.header}>
//         <Text style={styles.label}>✅ Antonyms</Text>
//         <TouchableOpacity onPress={() => handleSpeak(item.antonyms)}>
//           <Ionicons
//             name="volume-high-outline"
//             size={22}
//             color={isDark ? "#fff" : "#000"}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.chipContainer}>
//         {item.antonyms.split(",").map((ant: string, index: number) => (
//           <Text key={index} style={styles.text}>
//             {ant.trim()},
//           </Text>
//         ))}
//       </View>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1, backgroundColor: isDark ? "#1a1a1a" : "#f7f7f7" }}>
//       <FlashList
//         data={dataList}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//         estimatedItemSize={140}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={true}
//         extraData={lovedIds}
//       />
//     </View>
//   );
// }
