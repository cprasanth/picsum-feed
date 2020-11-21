import { FlatList } from 'react-native';
import React from 'react';

import { getImageFromId } from '../utils/api';
import Card from './Card';

const keyExtractor = ({ id }) => id.toString();

const renderItem = ({ item: { id, author } }) => (
  <Card
    fullname={author}
    image={{
      uri: getImageFromId(id),
    }}
  />
);

export default CardList = ({ items }) => (
  <FlatList data={items} renderItem={renderItem} keyExtractor={keyExtractor} />
);
