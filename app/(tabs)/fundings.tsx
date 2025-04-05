import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { CirclePlus as PlusCircle, TrendingUp, Users, Calendar } from 'lucide-react-native';
import { router } from 'expo-router';

interface Campaign {
  id: string;
  title: string;
  company: string;
  targetAmount: number;
  raisedAmount: number;
  investors: number;
  daysLeft: number;
  image: string;
}

const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    title: 'AI-Powered Healthcare Solution',
    company: 'HealthTech Innovations',
    targetAmount: 500000,
    raisedAmount: 325000,
    investors: 45,
    daysLeft: 15,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
  },
  {
    id: '2',
    title: 'Sustainable Energy Storage',
    company: 'GreenPower Solutions',
    targetAmount: 1000000,
    raisedAmount: 750000,
    investors: 120,
    daysLeft: 30,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
  },
  // Add more mock campaigns
];

export default function Fundings() {
  const [activeTab, setActiveTab] = useState('all');

  const handleCreateCampaign = () => {
    router.replace('/(campaigns)/create-campaign');
  };

  const handleCampaignPress = (campaignId: string) => {
    router.replace(`/(campaigns)/${campaignId}`);
  };

  const renderCampaignCard = ({ item }: { item: Campaign }) => {
    const progress = (item.raisedAmount / item.targetAmount) * 100;
    
    return (
      <TouchableOpacity 
        style={styles.card}
        onPress={() => handleCampaignPress(item.id)}
      >
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.campaignTitle}>{item.title}</Text>
          <Text style={styles.companyName}>{item.company}</Text>
          
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
          </View>
          
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <TrendingUp size={16} color="#666" />
              <Text style={styles.statText}>
                ${item.raisedAmount.toLocaleString()} raised
              </Text>
            </View>
            <View style={styles.stat}>
              <Users size={16} color="#666" />
              <Text style={styles.statText}>
                {item.investors} investors
              </Text>
            </View>
            <View style={styles.stat}>
              <Calendar size={16} color="#666" />
              <Text style={styles.statText}>
                {item.daysLeft} days left
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.createButton}
          onPress={handleCreateCampaign}
        >
          <PlusCircle size={20} color="#fff" />
          <Text style={styles.createButtonText}>Create Campaign</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'all' && styles.activeTab]}
          onPress={() => setActiveTab('all')}
        >
          {/* <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>
            All Campaigns
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'my' && styles.activeTab]}
          onPress={() => setActiveTab('my')}
        >
          <Text style={[styles.tabText, activeTab === 'my' && styles.activeTabText]}>
            My Campaigns
          </Text> *}
        </TouchableOpacity>
      </View> */}

      <FlatList
        data={MOCK_CAMPAIGNS}
        renderItem={renderCampaignCard}
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
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  createButton: {
    backgroundColor: '#0066cc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0066cc',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  campaignTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  companyName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#e1e1e1',
    borderRadius: 2,
    marginBottom: 12,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#0066cc',
    borderRadius: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
});