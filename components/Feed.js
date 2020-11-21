import { ActivityIndicator, Text, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';

import { fetchImages } from '../utils/api';
import CardList from './CardList';

export default Feed = ({ style }) => {
  const [images, setImages] = useState({
    loading: true,
    error: false,
    items: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await fetchImages();
        setImages({
          loading: false,
          items,
        });
      } catch (e) {
        setImages({
          loading: false,
          error: true,
          items: [],
        });
      }
    };
    fetchData();
  }, []);
  if (images.loading) {
    return <ActivityIndicator size='large' />;
  }

  if (images.error) {
    return <Text>Error...</Text>;
  }

  return (
    <SafeAreaView style={style}>
      <CardList items={images.items} />
    </SafeAreaView>
  );
};
