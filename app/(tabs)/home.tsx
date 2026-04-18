import { homeStyles } from '@/assets/styles/home.styles';
import { fetchPosts, type Post } from '@/services/posts.api';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');

  const loadData = async (isRefresh = false) => {
    try {
      if (isRefresh) setRefreshing(true);
      else setLoading(true);
      setError(false);

      const posts = await fetchPosts();
      setData(posts);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = useCallback(() => {
    loadData(true);
  }, []);

  useEffect(() => {
    loadData();
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

        <TextInput
          style={homeStyles.searchBar}
          placeholder="Search posts..."
          placeholderTextColor="#94a3b8"
          value={query}
          onChangeText={setQuery}
          clearButtonMode="while-editing"
        />

        <FlatList<Post>
          data={data.filter(
            (post) =>
              post.title.toLowerCase().includes(query.toLowerCase()) ||
              post.body.toLowerCase().includes(query.toLowerCase()),
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={homeStyles.listContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#2563eb"
              colors={['#2563eb']}
            />
          }
          ListEmptyComponent={
            <View style={homeStyles.centerContainer}>
              <Text style={homeStyles.errorTitle}>📭</Text>
              <Text style={homeStyles.helperText}>
                {query ? `No results found for "${query}"` : 'No posts available. Pull down to refresh.'}
              </Text>
            </View>
          }
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
