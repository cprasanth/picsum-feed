import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default CommentList = ({ items }) => {
  const renderItem = (item, index) => (
    <View key={index} style={styles.comment}>
      <Text>{item}</Text>
    </View>
  );
  return <ScrollView>{items.map(renderItem)}</ScrollView>;
};

const styles = StyleSheet.create({
  comment: {
    marginLeft: 20,
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});