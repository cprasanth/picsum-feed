import React, { useState } from 'react';
import { StyleSheet, Platform, View, Modal } from 'react-native';
import Constants from 'expo-constants';

import Feed from './components/Feed';
import Comments from './components/Comments';

export default function App() {
  const [commentsForItem, setCommentsForItem] = useState();
  const [selectedItemId, setSelectedItemId] = useState();
  const [showModal, setShowModal] = useState(false);

  const openCommentScreen = (id) => {
    setSelectedItemId(id);
    setShowModal(true);
  };

  const closeCommentScreen = () => {
    setSelectedItemId(null);
    setShowModal(false);
  };

  const onSubmitComment = (text) => {
    const comments = commentsForItem && commentsForItem[selectedItemId] || [];

    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    };

    setCommentsForItem(updated);
  };
  return (
    <View style={styles.container}>
      <Feed
        style={styles.feed}
        commentsForItem={commentsForItem}
        onPressComments={openCommentScreen}
      />
      <Modal
        visible={showModal}
        animationType='slide'
        onRequestClose={closeCommentScreen}
      >
        <Comments
          style={styles.container}
          comments={
            (commentsForItem && commentsForItem[selectedItemId]) || []
          }
          onClose={closeCommentScreen}
          onSubmitComment={onSubmitComment}
        />
      </Modal>
    </View>
  );
}

const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0,
  },
  comments: {
    flex: 1,
    marginTop:
      Platform.OS === 'ios' && platformVersion < 11
        ? Constants.statusBarHeight
        : 0,
  },
});
