



import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Platform,
  FlexAlignType,
  TextStyle,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { idiomsCategoryData } from "@/assets/data/idioms/idiomsCategory";
const dataff: {
  id: number;
  title: string;

}[] = [
  {
    id: 1,
    title: "500 Daily/GRE Words",
 
  },
  {
    id: 2,
    title: "450 Common Words",

  },
  {
    id: 3,
    title: "650 IELTS Words",
   
  },
];

export default function PhrasesCategories({data}:any) {
  // const [lovedIds, setLovedIds] = useState<number[]>([]);
  // useEffect(() => {

  //   const loadLovedWords = async () => {
  //     const json = await AsyncStorage.getItem('lovedGreWords');
  //     if (json) setLovedIds(JSON.parse(json));
  //   };
  //   loadLovedWords();
  // }, []);

  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { category } = useLocalSearchParams() as {
    category: string;

  };
  const themedStyles = {
    card: {
      flexDirection: "row" as const,
      justifyContent: "space-between" as const,
      alignItems: "center" as FlexAlignType,
      padding: 22,
      marginHorizontal: 16,
      marginBottom: 12,
      backgroundColor: isDark ? "#313639" : "#fff",
      borderRadius: 8,
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: {
          elevation: 2,
        },
      }),
    },
    text: {
      color: isDark ? "#fff" : "#333",
      fontSize: 18,
      fontWeight: 500 as TextStyle["fontWeight"],
    },
    container: {
      flex: 1,
      backgroundColor: isDark ? "#191919" : "#f2f2f2",
      paddingTop: 16,
    },
  };

  return (
    <View style={themedStyles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={themedStyles.card}>
            <Pressable
              onPress={() => {
                router.push({
                  pathname: `/[category]/[title]`,
                  params: { category, title: item.title },
                });
              }}
            >
              <Text style={themedStyles.text}>{item.title}</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                console.log(item.category)
                router.push({
                  pathname: `/[category]/[title]`,
                  params: { 
                    category, title: category==='Phrases'&&
                    item.title === "Phrases Start With A" ? '❤️ A Phrases' :
                     item.title === 'Phrases Start With B' ? '❤️ B Phrases' :
                     item.title === 'Phrases Start With C' ? '❤️ C Phrases' :
                     item.title === 'Phrases Start With D' ? '❤️ D Phrases' :
                     item.title === 'Phrases Start With E' ? '❤️ E Phrases' :
                     item.title === 'Phrases Start With F' ? '❤️ F Phrases' :
                     item.title === 'Phrases Start With G' ? '❤️ G Phrases' :
                     item.title === 'Phrases Start With H' ? '❤️ H Phrases' :
                     item.title === 'Phrases Start With I' ? '❤️ I Phrases' :
                     item.title === 'Phrases Start With J' ? '❤️ J Phrases' :
                     item.title === 'Phrases Start With K' ? '❤️ K Phrases' :
                     item.title === 'Phrases Start With L' ? '❤️ L Phrases' :
                     item.title === 'Phrases Start With M' ? '❤️ N Phrases' :
                     item.title === 'Phrases Start With N' ? '❤️ N Phrases' :
                     item.title === 'Phrases Start With O' ? '❤️ O Phrases' :
                     item.title === 'Phrases Start With P' ? '❤️ P Phrases' :
                     item.title === 'Phrases Start With Q' ? '❤️ Q Phrases' :
                     item.title === 'Phrases Start With R' ? '❤️ R Phrases' :
                     item.title === 'Phrases Start With S' ? '❤️ S Phrases' :
                     item.title === 'Phrases Start With T' ? '❤️ T Phrases' :
                     item.title === 'Phrases Start With U' ? '❤️ U Phrases' :
                     item.title === 'Phrases Start With V' ? '❤️ V Phrases' :
                     item.title === 'Phrases Start With W' ? '❤️ W Phrases' :
                     item.title === 'Phrases Start With X' ? '❤️ X Phrases' :
                     item.title === 'Phrases Start With Y' ? '❤️ Y Phrases' :
                     item.title === 'Phrases Start With Z' ? '❤️ Z Phrases' :""
                      // item.title==='650 IELTS Words'?'Loved-ielts-words':""
                    
                    
                    
                    }
                });
              }}
            >
             <Ionicons name={'heart-outline'} size={24} color="red" />
            </Pressable>
            
          </View>
        )}
      />
    </View>
  );
}





