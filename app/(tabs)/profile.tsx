import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MapPin, Globe, Users, Mail, Phone, CreditCard as Edit2 } from 'lucide-react-native';

const MOCK_PROFILE = {
  companyName: 'TechStart Solutions',
  logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
  description: 'Leading provider of AI-powered business solutions. We help companies automate their operations and improve efficiency through cutting-edge technology.',
  location: 'San Francisco, CA',
  website: 'www.techstart.com',
  employees: '50-100',
  email: 'contact@techstart.com',
  phone: '+1 (555) 123-4567',
  ceo: {
    name: 'Sarah Anderson',
    title: 'CEO & Founder',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  stats: {
    campaigns: 3,
    totalRaised: '$2.5M',
    investors: 150,
  },
};

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: MOCK_PROFILE.coverImage }} style={styles.coverImage} />
        <View style={styles.headerContent}>
          <Image source={{ uri: MOCK_PROFILE.logo }} style={styles.logo} />
          <View style={styles.headerText}>
            <Text style={styles.companyName}>{MOCK_PROFILE.companyName}</Text>
            <TouchableOpacity style={styles.editButton}>
              <Edit2 size={16} color="#fff" />
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.description}>{MOCK_PROFILE.description}</Text>
          
          <View style={styles.infoList}>
            <View style={styles.infoItem}>
              <MapPin size={16} color="#666" />
              <Text style={styles.infoText}>{MOCK_PROFILE.location}</Text>
            </View>
            <View style={styles.infoItem}>
              <Globe size={16} color="#666" />
              <Text style={styles.infoText}>{MOCK_PROFILE.website}</Text>
            </View>
            <View style={styles.infoItem}>
              <Users size={16} color="#666" />
              <Text style={styles.infoText}>{MOCK_PROFILE.employees} employees</Text>
            </View>
            <View style={styles.infoItem}>
              <Mail size={16} color="#666" />
              <Text style={styles.infoText}>{MOCK_PROFILE.email}</Text>
            </View>
            <View style={styles.infoItem}>
              <Phone size={16} color="#666" />
              <Text style={styles.infoText}>{MOCK_PROFILE.phone}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Leadership</Text>
          <View style={styles.leadershipCard}>
            <Image source={{ uri: MOCK_PROFILE.ceo.avatar }} style={styles.ceoAvatar} />
            <View style={styles.ceoInfo}>
              <Text style={styles.ceoName}>{MOCK_PROFILE.ceo.name}</Text>
              <Text style={styles.ceoTitle}>{MOCK_PROFILE.ceo.title}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Statistics</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{MOCK_PROFILE.stats.campaigns}</Text>
              <Text style={styles.statLabel}>Campaigns</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{MOCK_PROFILE.stats.totalRaised}</Text>
              <Text style={styles.statLabel}>Total Raised</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{MOCK_PROFILE.stats.investors}</Text>
              <Text style={styles.statLabel}>Investors</Text>
            </View>
          </View>
        </View>
      </View>
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
  coverImage: {
    width: '100%',
    height: 200,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 16,
    marginTop: -40,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderWidth: 4,
    borderColor: '#fff',
  },
  headerText: {
    flex: 1,
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0066cc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 14,
  },
  content: {
    padding: 16,
  },
  section: {
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
  description: {
    fontSize: 14,
    color: '#1a1a1a',
    lineHeight: 20,
    marginBottom: 16,
  },
  infoList: {
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  leadershipCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ceoAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  ceoInfo: {
    flex: 1,
  },
  ceoName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  ceoTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
});