

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/hooks/theme';
import { FlashList } from '@shopify/flash-list';
import { useLocalSearchParams, useNavigation } from 'expo-router';

export default function ShowData({dataList,storageKey}:any) {
  const params=useLocalSearchParams()
 const navigation=useNavigation()
  const [lovedIds, setLovedIds] = useState<number[]>([]);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // useEffect(() => {
  //   navigation.setOptions({ title: decodeURIComponent(`${params.category} ${params.title}`) });
  // }, [params]);


  useEffect(() => {
    const loadLovedWords = async () => {
      const json = await AsyncStorage.getItem(storageKey);
      if (json) setLovedIds(JSON.parse(json));
    };
    loadLovedWords();
  }, []);

  const handleSpeak = (text: string) => {
    Speech.speak(text, { language: 'en', rate: 0.8 });
  };

  const toggleLove = async (id: number) => {
    const updated = lovedIds.includes(id)
      ? lovedIds.filter(i => i !== id)
      : [...lovedIds, id];
    setLovedIds(updated); // ✅ Fixed here
    await AsyncStorage.setItem(storageKey, JSON.stringify(updated));
  };

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
      alignItems: 'center',
      marginBottom: 10,
    },
    id: {
      fontWeight: 'bold',
      fontSize: 16,
      marginRight: 8,
      color: isDark ? '#fff' : '#333',
    },
    wordRow: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    word: {
      fontSize: 20,
      fontWeight: '600',
      color: isDark ? '#fff' : '#333',
      marginRight: 8,
    },
    badge: {
      backgroundColor: isDark ? '#444' : '#e0e0e0',
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 6,
    },
    badgeText: {
      fontSize: 12,
      color: isDark ? '#ccc' : '#555',
    },
    iconRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 6,
      color: isDark ? '#ccc' : '#666',
    },
    text: {
      fontSize: 15,
      color: isDark ? '#eee' : '#333',
    },
    textItalic: {
      fontSize: 14,
      fontStyle: 'italic',
      color: isDark ? '#bbb' : '#555',
    },
  });

  const renderItem = ({ item }: { item: typeof dataList[0] }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.id}>{item.id}.</Text>
        <View style={styles.wordRow}>
          <Text style={styles.word}>{item.idiom || item.phrase||item.proverb}</Text>
          {/* <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.partsOfSpeech}</Text>
          </View> */}
        </View>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => toggleLove(item.id)}>
            <Ionicons
              name={lovedIds.includes(item.id) ? 'heart' : 'heart-outline'}
              size={26}
              color={lovedIds.includes(item.id) ? 'red' : isDark ? '#aaa' : 'gray'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSpeak(item.idiom||item.phrase||item.proverb)} style={{ marginLeft: 10 }}>
            <Ionicons name="volume-high-outline" size={28} color={isDark ? '#fff' : 'black'} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.label}>📖 Meaning</Text>
      <Text style={styles.text}>{item.meaning}</Text>
      <Text style={styles.label}>💬 Example</Text>
      <Text style={styles.textItalic}>1. {item.example1}</Text>
      <Text style={styles.textItalic}>2. {item.example2}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#191919' : '#f2f2f2' }}>
      <FlashList
        data={dataList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        estimatedItemSize={140}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={true}
        extraData={lovedIds} 
      />
    </View>
  );
}
