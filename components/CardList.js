import { FlatList } from 'react-native';
import React from 'react';

import { getImageFromId } from '../utils/api';
import Card from './Card';

const keyExtractor = ({ id }) => id.toString();

export default CardList = ({ items, commentsForItem, onPressComments }) => {
  const renderItem = ({ item: { id, author } }) => {
    const comments = (commentsForItem && commentsForItem[id]) || [];
    return (
      <Card
        fullname={author}
        image={{
          uri: getImageFromId(id),
        }}
        linkText={`${comments ? comments.length : 0} Comments`}
        onPressLinkText={() => onPressComments(id)}
      />
    );
  };
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={commentsForItem}
    />
  );
};
