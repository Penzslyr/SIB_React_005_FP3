import { View, Text, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import SearchSection from '../components/SearchSection';
import TopSection from '../components/TopSection';
import PopularSection from '../components/PopularSection';
import ResultSection from '../components/ResultSection';
import { useSelector } from 'react-redux';

const Home = () => {
  const isSearched = useSelector((state) => state.search.searched);

  return (
    <View>
      <SearchSection />
      <ScrollView>
        {isSearched && <ResultSection />}
        {!isSearched && <TopSection />}
        {!isSearched && <PopularSection />}
      </ScrollView>
    </View>
  );
};

export default Home;
