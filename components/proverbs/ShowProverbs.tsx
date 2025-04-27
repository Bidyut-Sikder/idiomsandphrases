
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/hooks/theme';
import { useLocalSearchParams, useNavigation } from 'expo-router';

export default function ShowProverbs({ dataList, storageKey }: any) {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const [lovedIds, setLovedIds] = useState<number[]>([]);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Handle speaking functionality and restart speech if clicked again
  const handleSpeak = (text: string) => {
    Speech.stop(); // Stop any current speech
    Speech.speak(text, { language: 'en', rate: 0.8 }); // Start new speech
  };

  // Clean up speech when user navigates away
  useEffect(() => {
    return () => {
      Speech.stop(); // Stop speech when component unmounts or user navigates away
    };
  }, []);

  const styles = StyleSheet.create({
    list: {
      padding: 12,
    },
    card: {
      backgroundColor: isDark ? '#313639' : '#fff',
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        android: {
          elevation: 4,
        },
      }),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 10,
    },
    id: {
      fontWeight: 'bold',
      fontSize: 18,
      color: isDark ? '#fff' : '#333',
      marginRight: 8,
      marginTop: 3,
    },
    wordContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      flex: 1,
      flexWrap: 'wrap',
    },
    word: {
      fontSize: 20,
      fontWeight: '600',
      color: isDark ? '#fff' : '#333',
      flexShrink: 1,
    },
    labelRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8,
      marginBottom: 4,
    },
    label: {
      fontSize: 17,
      fontWeight: 'bold',
      color: isDark ? '#ccc' : '#666',
    },
    text: {
      fontSize: 16,
      color: isDark ? '#eee' : '#333',
    },
    textItalic: {
      fontSize: 16,
      fontStyle: 'italic',
      color: isDark ? '#bbb' : '#555',
    },
  });

  const renderItem = ({ item }: { item: typeof dataList[0] }) => (
    <View style={styles.card}>
      {/* ID + Proverb + Speaker */}
      <View style={styles.header}>
        <Text style={styles.id}>{item.id}.</Text>
        <View style={styles.wordContainer}>
          <Text style={styles.word} numberOfLines={2} ellipsizeMode="tail">
            {item.proverb}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleSpeak(item.proverb)} style={{ marginLeft: 8 }}>
          <Ionicons name="volume-high-outline" size={26} color={isDark ? '#fff' : '#333'} />
        </TouchableOpacity>
      </View>

      {/* Meaning */}
      <View style={styles.labelRow}>
        <Text style={styles.label}>📖 Meaning</Text>
        <TouchableOpacity onPress={() => handleSpeak(item.meaning)}>
          <Ionicons name="volume-high-outline" size={22} color={isDark ? '#ccc' : '#666'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{item.meaning}</Text>

      {/* Example */}
      <View style={styles.labelRow}>
        <Text style={styles.label}>💬 Example</Text>
        <TouchableOpacity
          onPress={() =>
            handleSpeak(`Example one: ${item.example1}. Example two: ${item.example2}`)
          }
        >
          <Ionicons name="volume-high-outline" size={22} color={isDark ? '#ccc' : '#666'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.textItalic}>1. {item.example1}</Text>
      <Text style={styles.textItalic}>2. {item.example2}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#191919' : '#f2f2f2' }}>
      <FlashList
        data={dataList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        estimatedItemSize={160}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={true}
        extraData={lovedIds}
      />
    </View>
  );
}
















