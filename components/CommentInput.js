import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default CommentInput = ({ placeholder, onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (!!comment) {
      onSubmit(comment);
      setComment('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={comment}
        placeholder={placeholder}
        underlineColorAndroid='transparent'
        onChangeText={(val) => setComment(val)}
        onSubmitEditing={() => handleSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    height: 60,
  },
  input: {
    flex: 1,
  },
});
