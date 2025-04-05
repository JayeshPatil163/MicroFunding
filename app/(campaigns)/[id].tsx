import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Replace 'MaterialIcons' with the correct icon set if needed
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { Campaign, Investor, InvestmentInterest } from '../../types/campaign';

// Mock data - Replace with API calls
const MOCK_CAMPAIGN: Campaign = {
  id: '1',
  title: 'AI-Powered Healthcare Solution',
  company: 'HealthTech Innovations',
  description: 'Revolutionary AI-powered healthcare solution...',
  targetAmount: 500000,
  raisedAmount: 325000,
  investors: 45,
  daysLeft: 15,
  image: 'https://example.com/image.jpg',
  businessPlan: 'Detailed business plan...',
  financialProjections: 'Financial projections...',
  teamInfo: 'Team information...',
  marketAnalysis: 'Market analysis...',
  riskFactors: 'Risk factors...',
  equity: 15,
  minimumInvestment: 10000,
  createdAt: new Date(),
  status: 'active'
};

const MOCK_INVESTORS: Investor[] = [
  {
    id: '1',
    name: 'John Smith',
    profileImage: 'https://example.com/investor1.jpg',
    bio: 'Experienced angel investor...',
    investmentPreferences: {
      sectors: ['Healthcare', 'AI'],
      investmentRange: { min: 50000, max: 500000 }
    },
    pastInvestments: 12,
    availabilityCalendarId: 'cal_xyz',
    contactInfo: { email: 'john@example.com' }
  },
  // Add more mock investors
];

export default function CampaignDetails() {

  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(null);
  const [showChat, setShowChat] = useState(false);

  // TODO: Replace with actual API calls
  const campaign = MOCK_CAMPAIGN;
  const investors = MOCK_INVESTORS;

  const handleScheduleMeeting = async (investor: Investor) => {
    try {
      // TODO: Integrate with Cal.com API
      // 1. Create a booking link
      // const bookingLink = await calApi.createBookingLink({
      //   calendarId: investor.availabilityCalendarId,
      //   title: `Meeting with ${campaign.company}`,
      //   description: `Discussion about investment in ${campaign.title}`,
      // });
      // 2. Open booking link
      // await Linking.openURL(bookingLink);
    } catch (error) {
      console.error('Error scheduling meeting:', error);
    }
  };

  const handleStartChat = (investor: Investor) => {
    setSelectedInvestor(investor);
    setShowChat(true);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Icon name="arrow-back" color="#333" size={24} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Image source={{ uri: campaign.image }} style={styles.campaignImage} />
        <View style={styles.headerContent}>
          <Text style={styles.title}>{campaign.title}</Text>
          <Text style={styles.company}>{campaign.company}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Campaign Overview</Text>
        <Text style={styles.description}>{campaign.description}</Text>
        
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>${campaign.targetAmount.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Target Amount</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{campaign.equity}%</Text>
            <Text style={styles.statLabel}>Equity Offered</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>${campaign.minimumInvestment.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Min Investment</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Interested Investors</Text>
        {investors.map((investor) => (
          <View key={investor.id} style={styles.investorCard}>
            <Image source={{ uri: investor.profileImage }} style={styles.investorImage} />
            <View style={styles.investorInfo}>
              <Text style={styles.investorName}>{investor.name}</Text>
              <Text style={styles.investorBio}>{investor.bio}</Text>
              <Text style={styles.investorStats}>
                {investor.pastInvestments} past investments
              </Text>
            </View>
            <View style={styles.investorActions}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleStartChat(investor)}
              >
                <Text style={styles.actionButtonText}>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.scheduleButton]}
                onPress={() => handleScheduleMeeting(investor)}
              >
                <Text style={styles.actionButtonText}>Schedule Meeting</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {showChat && selectedInvestor && (
        <View style={styles.chatContainer}>
          {/* TODO: Implement chat UI */}
          <Text>Chat with {selectedInvestor.name}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
  },

  backButton: {
    padding: 16,
  },
  campaignImage: {
    width: '100%',
    height: 200,
  },
  headerContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  company: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 8,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  investorCard: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  investorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  investorInfo: {
    flex: 1,
  },
  investorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  investorBio: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  investorStats: {
    fontSize: 14,
    color: '#0066cc',
  },
  investorActions: {
    marginLeft: 16,
  },
  actionButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  scheduleButton: {
    backgroundColor: '#28a745',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  chatContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    padding: 16,
  },
}); 