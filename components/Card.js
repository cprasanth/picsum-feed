import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import AuthorRow from './AuthorRow';

export default Card = ({ fullname, image, linkText, onPressLinkText }) => {
  const [loading, setLoading] = useState(true);
  return (
    <View>
      <AuthorRow
        fullname={fullname}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <View style={styles.image}>
        {loading && (
          <ActivityIndicator
            style={styles.absoluteFillStyle}
            size='large'
            color='red'
          />
        )}
        <Image
          style={styles.absoluteFillStyle}
          source={image}
          onLoad={() => setLoading(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  absoluteFillStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
