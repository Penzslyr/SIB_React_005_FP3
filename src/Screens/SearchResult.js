import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import SearchSection from '../components/SearchSection';
import ResultSection from '../components/ResultSection';

const SearchResult = () => {
  return (
    <View>
      <SearchSection />
      <ScrollView>
        <ResultSection />
      </ScrollView>
    </View>
  );
};

export default SearchResult;
