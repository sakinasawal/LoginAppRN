import { homeStyles } from '@/assets/styles/home.styles';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function HomeScreen() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json: Post[] = await response.json();

      setData(json);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={homeStyles.safeArea} edges={['top']}>
        <View style={homeStyles.centerContainer}>
          <ActivityIndicator size="large" color="#2563eb" />
          <Text style={homeStyles.helperText}>Loading posts...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={homeStyles.safeArea} edges={['top']}>
        <View style={homeStyles.centerContainer}>
          <Text style={homeStyles.errorTitle}>Oops!</Text>
          <Text style={homeStyles.errorText}>Something went wrong while loading data.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={homeStyles.safeArea} edges={['top']}>
      <View style={homeStyles.screen}>
        <View style={homeStyles.headerBox}>
          <Text style={homeStyles.headerTitle}>Home Feed</Text>
          <Text style={homeStyles.headerSubtitle}>Latest posts from API</Text>
        </View>

        <FlatList<Post>
          data={data}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={homeStyles.listContent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={homeStyles.separator} />}
          renderItem={({ item }) => (
            <View style={homeStyles.card}>
              <View style={homeStyles.badge}>
                <Text style={homeStyles.badgeText}>#{item.id}</Text>
              </View>
              <Text style={homeStyles.cardTitle}>{item.title}</Text>
              <Text style={homeStyles.cardBody}>{item.body}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
