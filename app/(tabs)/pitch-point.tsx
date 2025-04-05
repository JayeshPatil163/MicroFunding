import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Search, Filter } from 'lucide-react-native';

const MOCK_INVESTORS = [
  {
    id: '1',
    name: 'John Smith',
    domain: 'Technology',
    location: 'San Francisco, USA',
    investmentRange: '$100K - $500K',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    domain: 'Healthcare',
    location: 'London, UK',
    investmentRange: '$500K - $1M',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // Add more mock investors
];

export default function PitchPoint() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');

  const domains = ['All', 'Technology', 'Healthcare', 'Finance', 'Retail', 'Education'];

  const renderInvestorCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{item.name[0]}</Text>
        </View>
        <View style={styles.cardHeaderText}>
          <Text style={styles.investorName}>{item.name}</Text>
          <Text style={styles.investorDomain}>{item.domain}</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.investmentRange}>Investment Range: {item.investmentRange}</Text>
      </View>
      <TouchableOpacity style={styles.pitchButton}>
        <Text style={styles.pitchButtonText}>Pitch Now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search investors..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.domainsContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={domains}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.domainChip,
                selectedDomain === item && styles.selectedDomainChip,
              ]}
              onPress={() => setSelectedDomain(item)}
            >
              <Text
                style={[
                  styles.domainChipText,
                  selectedDomain === item && styles.selectedDomainChipText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.domainsList}
        />
      </View>

      <FlatList
        data={MOCK_INVESTORS}
        renderItem={renderInvestorCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    height: 40,
  },
  filterButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f1f3f5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  domainsContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
  },
  domainsList: {
    paddingHorizontal: 16,
  },
  domainChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f1f3f5',
    borderRadius: 20,
    marginRight: 8,
  },
  selectedDomainChip: {
    backgroundColor: '#0066cc',
  },
  domainChipText: {
    color: '#666',
    fontSize: 14,
  },
  selectedDomainChipText: {
    color: '#fff',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#0066cc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardHeaderText: {
    flex: 1,
  },
  investorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  investorDomain: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  cardBody: {
    marginBottom: 12,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  investmentRange: {
    fontSize: 14,
    color: '#666',
  },
  pitchButton: {
    backgroundColor: '#0066cc',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  pitchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});