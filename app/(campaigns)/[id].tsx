


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Dimensions } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Campaign, Investor } from '../../types/campaign';
import axios from 'axios';

// Mock investors data
const MOCK_INVESTORS: Investor[] = [
  {
    id: '1',
    name: 'John Smith',
    profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    bio: 'Angel investor with 10+ years experience in healthcare and technology sectors.',
    investmentPreferences: {
      sectors: ['Healthcare', 'AI'],
      investmentRange: { min: 50000, max: 500000 }
    },
    pastInvestments: 12,
    availabilityCalendarId: 'cal_xyz',
    contactInfo: { email: 'john@example.com' }
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    profileImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    bio: 'Venture capitalist specializing in early-stage tech startups with sustainable business models.',
    investmentPreferences: {
      sectors: ['SaaS', 'Fintech'],
      investmentRange: { min: 100000, max: 1000000 }
    },
    pastInvestments: 24,
    availabilityCalendarId: 'cal_abc',
    contactInfo: { email: 'sarah@example.com' }
  },
  {
    id: '3',
    name: 'Michael Chen',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    bio: 'Serial entrepreneur turned investor with focus on AI and machine learning applications.',
    investmentPreferences: {
      sectors: ['AI', 'ML', 'Data'],
      investmentRange: { min: 75000, max: 750000 }
    },
    pastInvestments: 18,
    availabilityCalendarId: 'cal_def',
    contactInfo: { email: 'michael@example.com' }
  }
];

// Default campaign data as fallback
const DEFAULT_CAMPAIGN: Campaign = {
  id: '1',
  title: 'AI-Powered Healthcare Solution',
  company: 'HealthTech Innovations',
  description: 'Our revolutionary AI-powered healthcare solution uses machine learning algorithms to analyze patient data and provide early diagnosis of chronic conditions. This technology has shown a 94% accuracy rate in clinical trials and has the potential to save healthcare providers millions while improving patient outcomes.',
  targetAmount: 500000,
  raisedAmount: 325000,
  investors: 45,
  daysLeft: 15,
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
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

const businessImages = [
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Office workspace
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Handshake
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Business meeting
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Modern office
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Professional business person
  'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Conference room
  'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Startup workspace
  'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Business district
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Retail store
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Coffee shop
];

export default function CampaignDetails() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [fetchAttempted, setFetchAttempted] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  
  useEffect(() => {
    // Select a random image from the collection
    const randomIndex = Math.floor(Math.random() * businessImages.length);
    setImageUrl(businessImages[randomIndex]);
  }, []);
  
  useEffect(() => {
    // Only fetch data if we haven't attempted yet
    if (!fetchAttempted) {
      fetchCampaignData();
    }
  }, [params, fetchAttempted]);

  const calculateDaysLeft = (endDateStr?: string) => {
    if (!endDateStr) return 0;
    
    const endDate = new Date(endDateStr);
    const today = new Date();
    
    // Calculate days difference
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays > 0 ? diffDays : 0;
  };
  
  const fetchCampaignData = async () => {
    try {
      setLoading(true);
      setFetchAttempted(true);
      
      // Get campaign ID from params
      const campaignId = params.id?.toString();
      
      console.log('Received campaign ID from params:', campaignId);
      
      if (!campaignId) {
        console.log('No campaign ID provided, using default campaign');
        setCampaign(DEFAULT_CAMPAIGN);
        setLoading(false);
        return;
      }
      
      // Fetch all campaigns from the backend
      const response = await axios.get('http://192.168.151.227:3000/campaigns/');
      
      if (response?.data && Array.isArray(response.data)) {
        console.log('Fetched campaigns successfully');
        
        // Find the campaign with the matching ID
        const foundCampaign = response.data.find(
          (item) => item.id === campaignId || item._id === campaignId
        );
        
        if (foundCampaign) {
          console.log('Found matching campaign:', foundCampaign);
          
          // Process the campaign data
          // Update in fetchCampaignData function, within the processedCampaign object creation
const processedCampaign: Campaign = {
  id: foundCampaign.id || foundCampaign._id,
  title: foundCampaign.title || DEFAULT_CAMPAIGN.title,
  company: foundCampaign.company || foundCampaign.organizationId || DEFAULT_CAMPAIGN.company,
  description: foundCampaign.description || DEFAULT_CAMPAIGN.description,
  targetAmount: Number(foundCampaign.targetAmt || foundCampaign.targetAmount) || DEFAULT_CAMPAIGN.targetAmount,
  raisedAmount: Number(foundCampaign.raisedAmount) || DEFAULT_CAMPAIGN.raisedAmount,
  investors: Number(foundCampaign.investors) || DEFAULT_CAMPAIGN.investors,
  daysLeft: calculateDaysLeft(foundCampaign.endDate) || DEFAULT_CAMPAIGN.daysLeft,
  image: foundCampaign.image || DEFAULT_CAMPAIGN.image,
  businessPlan: foundCampaign.buisnessPlan || foundCampaign.businessPlan || DEFAULT_CAMPAIGN.businessPlan,
  financialProjections: foundCampaign.financialProjec || foundCampaign.financialProjections || DEFAULT_CAMPAIGN.financialProjections,
  teamInfo: foundCampaign.teamInfo || DEFAULT_CAMPAIGN.teamInfo,
  marketAnalysis: foundCampaign.marketAnalysis || DEFAULT_CAMPAIGN.marketAnalysis,
  riskFactors: foundCampaign.riskFactor || foundCampaign.riskFactors || DEFAULT_CAMPAIGN.riskFactors,
  equity: Number(foundCampaign.equityOffered || foundCampaign.equity) || DEFAULT_CAMPAIGN.equity,
  minimumInvestment: Number(foundCampaign.minInvestmentAmt || foundCampaign.minimumInvestment) || DEFAULT_CAMPAIGN.minimumInvestment,
  createdAt: foundCampaign.startDate ? new Date(foundCampaign.startDate) : 
             (foundCampaign.createdAt ? new Date(foundCampaign.createdAt) : DEFAULT_CAMPAIGN.createdAt),
  status: foundCampaign.isActive ? 'active' : (foundCampaign.status || DEFAULT_CAMPAIGN.status)
};
          setCampaign(processedCampaign);
        } else {
          console.log(`Campaign with ID ${campaignId} not found, using default`);
          setCampaign(DEFAULT_CAMPAIGN);
        }
      } else {
        console.log('Invalid response data format, using default campaign');
        setCampaign(DEFAULT_CAMPAIGN);
      }
    } catch (error) {
      console.error('Error fetching campaign data:', error);
      setCampaign(DEFAULT_CAMPAIGN);
    } finally {
      setLoading(false);
    }
  };
  
  const handleScheduleMeeting = async (investor: Investor) => {
    try {
      // TODO: Integrate with Cal.com API
      console.log(`Scheduling meeting with ${investor.name}`);
      alert(`Meeting scheduling with ${investor.name} will be implemented in a future release.`);
    } catch (error) {
      console.error('Error scheduling meeting:', error);
    }
  };

  const handleStartChat = (investor: Investor) => {
    setSelectedInvestor(investor);
    setShowChat(true);
  };
  
  const progressPercentage = campaign ? (campaign.raisedAmount / campaign.targetAmount) * 100 : 0;
  
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={styles.loadingText}>Loading campaign details...</Text>
      </View>
    );
  }
  
  if (!campaign) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="alert-circle-outline" size={48} color="#dc3545" />
        <Text style={styles.errorText}>Unable to load campaign details</Text>
        <TouchableOpacity style={styles.backButtonPrimary} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header with Image and Gradient Overlay */}
        <View style={styles.header}>
          <Image 
            source={{ uri: imageUrl }} 
            style={styles.campaignImage} 
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.imageGradient}
          />
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" color="#fff" size={24} />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.title}>{campaign.title}</Text>
            <Text style={styles.company}>{campaign.company}</Text>
          </View>
        </View>

        {/* Campaign Overview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Campaign Overview</Text>
          <Text style={styles.description}>{campaign.description}</Text>
          
          {/* Funding Progress */}
          <View style={styles.fundingContainer}>
            <View style={styles.fundingHeader}>
              <Text style={styles.fundingTitle}>Funding Progress</Text>
              <Text style={styles.fundingPercentage}>{progressPercentage.toFixed(0)}%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${progressPercentage}%` }]} />
            </View>
            <View style={styles.fundingDetails}>
              <Text style={styles.fundingRaised}>${campaign.raisedAmount.toLocaleString()} raised</Text>
              <Text style={styles.fundingTarget}>of ${campaign.targetAmount.toLocaleString()}</Text>
            </View>
            <View style={styles.fundingMeta}>
              <Text style={styles.fundingMetaItem}>{campaign.investors} investors</Text>
              <Text style={styles.fundingMetaItem}>{campaign.daysLeft} days left</Text>
            </View>
          </View>
          
          {/* Stats Grid */}
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

        {/* Campaign Details Tabs (placeholder) */}
        {/* <View style={styles.section}>
          <View style={styles.tabsContainer}>
            <TouchableOpacity style={[styles.tab, styles.activeTab]}>
              <Text style={[styles.tabText, styles.activeTabText]}>Overview</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Business Plan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Team</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Financials</Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* Interested Investors Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interested Investors</Text>
          {MOCK_INVESTORS.map((investor) => (
            <View key={investor.id} style={styles.investorCard}>
              <Image 
                source={{ uri: investor.profileImage }} 
                style={styles.investorImage} 
              />
              <View style={styles.investorInfo}>
                <Text style={styles.investorName}>{investor.name}</Text>
                <Text style={styles.investorBio} numberOfLines={2}>{investor.bio}</Text>
                <View style={styles.investorMetaContainer}>
                  <View style={styles.investorMetaItem}>
                    <Ionicons name="checkmark-circle" size={14} color="#28a745" />
                    <Text style={styles.investorMetaText}>
                      {investor.pastInvestments} investments
                    </Text>
                  </View>
                  <View style={styles.investorMetaItem}>
                    <Ionicons name="briefcase" size={14} color="#6c757d" />
                    <Text style={styles.investorMetaText}>
                      {investor.investmentPreferences.sectors.join(', ')}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.investorActions}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleStartChat(investor)}
                >
                  <Ionicons name="chatbubble-outline" size={18} color="#fff" />
                  <Text style={styles.actionButtonText}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionButton, styles.scheduleButton]}
                  onPress={() => handleScheduleMeeting(investor)}
                >
                  <Ionicons name="calendar-outline" size={18} color="#fff" />
                  <Text style={styles.actionButtonText}>Schedule</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        
        {/* Bottom investment CTA section */}
        <View style={styles.ctaSection}>
          <View style={styles.ctaContent}>
            <Text style={styles.ctaTitle}>Interested in investing?</Text>
            <Text style={styles.ctaDescription}>
              Join {campaign.investors} other investors and be part of this opportunity.
            </Text>
          </View>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Invest Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Chat Modal */}
      {showChat && selectedInvestor && (
        <View style={styles.chatContainer}>
          <View style={styles.chatHeader}>
            <View style={styles.chatHeaderInfo}>
              <Image source={{ uri: selectedInvestor.profileImage }} style={styles.chatAvatar} />
              <Text style={styles.chatName}>Chat with {selectedInvestor.name}</Text>
            </View>
            <TouchableOpacity onPress={() => setShowChat(false)}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          <View style={styles.chatBody}>
            <Text style={styles.chatPlaceholder}>Chat feature coming soon</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f8f9fa',
  },
  errorText: {
    fontSize: 18,
    color: '#333',
    marginTop: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  backButtonPrimary: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    position: 'relative',
    height: 280,
  },
  campaignImage: {
    width: '100%',
    height: 280,
    position: 'absolute',
  },
  imageGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 16,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  company: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 12,
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 24,
  },
  fundingContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  fundingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  fundingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  fundingPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#e1e1e1',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#0066cc',
    borderRadius: 4,
  },
  fundingDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  fundingRaised: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  fundingTarget: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  fundingMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fundingMetaItem: {
    fontSize: 14,
    color: '#666',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0066cc',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
  investorCard: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    alignItems: 'center',
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
    marginBottom: 8,
    lineHeight: 20,
  },
  investorMetaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  investorMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 4,
  },
  investorMetaText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 4,
  },
  investorActions: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    backgroundColor: '#0066cc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 8,
    width: 100,
    justifyContent: 'center',
  },
  scheduleButton: {
    backgroundColor: '#28a745',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  ctaSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    marginBottom: 32,
  },
  ctaContent: {
    flex: 1,
  },
  ctaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  ctaDescription: {
    fontSize: 14,
    color: '#666',
  },
  ctaButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  chatContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 350,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    padding: 16,
  },
  chatHeaderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  chatBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  chatPlaceholder: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  }
});