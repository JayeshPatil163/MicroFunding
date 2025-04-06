// import { useState } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
// import { Search, Filter } from 'lucide-react-native';

// const MOCK_INVESTORS = [
//   {
//     id: '1',
//     name: 'John Smith',
//     domain: 'Technology',
//     location: 'San Francisco, USA',
//     investmentRange: '$100K - $500K',
//     avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   {
//     id: '2',
//     name: 'Sarah Johnson',
//     domain: 'Healthcare',
//     location: 'London, UK',
//     investmentRange: '$500K - $1M',
//     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   // Add more mock investors
// ];

// export default function PitchPoint() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedDomain, setSelectedDomain] = useState('All');
//   const [investors, setInvestors] = useState<{ id: string; firstName: string; lastName: string; email: string; phone?: string; industryInterests?: string[]; investmentScale?: string; isActive?: boolean; createdAt?: string; }[]>([]);

//   const domains = ['All', 'Technology', 'Healthcare', 'Finance', 'Retail', 'Education'];

//   const fetchInvestors = async () => {
//           try {
//             //setLoading(true);
//             const response = await axios.get<{ id: string; firstName: string; lastName: string; email: string; phone?: string; industryInterests?: string[]; investmentScale?: string; isActive?: boolean; createdAt?: string; }[]>('http://192.168.45.227:3000/investors');
            
//             //
//             setInvestors(response.data);
//             console.log(investors);
//             //setLoading(false);
//           } catch (err) {
//             //setError('Failed to fetch investors');
//             //setLoading(false);
//             console.error(err);
//           }
//            };
//   const renderInvestorCard = ({ item }) => (
//     <TouchableOpacity style={styles.card}>
//       <Text>fetchInvestors()</Text>
//       <View style={styles.cardHeader}>
//         <View style={styles.avatarContainer}>
//           <Text style={styles.avatarText}>{item.name[0]}</Text>
//         </View>
//         <View style={styles.cardHeaderText}>
//           <Text style={styles.investorName}>{item.name}</Text>
//           <Text style={styles.investorDomain}>{item.domain}</Text>
//         </View>
//       </View>
//       <View style={styles.cardBody}>
//         <Text style={styles.location}>{item.location}</Text>
//         <Text style={styles.investmentRange}>Investment Range: {item.investmentRange}</Text>
//       </View>
//       <TouchableOpacity style={styles.pitchButton}>
//         <Text style={styles.pitchButtonText}>Pitch Now</Text>
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.searchContainer}>
//         <View style={styles.searchBar}>
//           <Search size={20} color="#666" />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search investors..."
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <TouchableOpacity style={styles.filterButton}>
//           <Filter size={20} color="#666" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.domainsContainer}>
//         <FlatList
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           data={domains}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={[
//                 styles.domainChip,
//                 selectedDomain === item && styles.selectedDomainChip,
//               ]}
//               onPress={() => setSelectedDomain(item)}
//             >
//               <Text
//                 style={[
//                   styles.domainChipText,
//                   selectedDomain === item && styles.selectedDomainChipText,
//                 ]}
//               >
//                 {item}
//               </Text>
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item) => item}
//           contentContainerStyle={styles.domainsList}
//         />
//       </View>

//       <FlatList
//         data={MOCK_INVESTORS}
//         renderItem={renderInvestorCard}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 16,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e1e1e1',
//   },
//   searchBar: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f1f3f5',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     marginRight: 12,
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 8,
//     fontSize: 16,
//     height: 40,
//   },
//   filterButton: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#f1f3f5',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   domainsContainer: {
//     backgroundColor: '#fff',
//     paddingVertical: 12,
//   },
//   domainsList: {
//     paddingHorizontal: 16,
//   },
//   domainChip: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     backgroundColor: '#f1f3f5',
//     borderRadius: 20,
//     marginRight: 8,
//   },
//   selectedDomainChip: {
//     backgroundColor: '#0066cc',
//   },
//   domainChipText: {
//     color: '#666',
//     fontSize: 14,
//   },
//   selectedDomainChipText: {
//     color: '#fff',
//   },
//   listContainer: {
//     padding: 16,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   avatarContainer: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     backgroundColor: '#0066cc',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   avatarText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   cardHeaderText: {
//     flex: 1,
//   },
//   investorName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//   },
//   investorDomain: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   cardBody: {
//     marginBottom: 12,
//   },
//   location: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   investmentRange: {
//     fontSize: 14,
//     color: '#666',
//   },
//   pitchButton: {
//     backgroundColor: '#0066cc',
//     borderRadius: 8,
//     padding: 12,
//     alignItems: 'center',
//   },
//   pitchButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });



import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';
import { Search, Filter, Calendar, MessageCircle, X, ArrowLeft } from 'lucide-react-native';
import axios from 'axios';

export default function PitchPoint() {
  const [investors, setInvestors] = useState<{ id: string; firstName: string; lastName: string; email: string; phone?: string; industryInterests?: string[]; investmentScale?: string; isActive?: boolean; createdAt?: string; }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedInvestor, setSelectedInvestor] = useState<{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    industryInterests?: string[];
    investmentScale?: string;
    isActive?: boolean;
    createdAt?: string;
  } | null>(null);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [chatModalVisible, setChatModalVisible] = useState(false);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);

  // Available domains for filtering
  const domains = ['All', 'Technology', 'Healthcare', 'Finance', 'Retail', 'Education'];

  // Fetch investors from backend
  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{ id: string; firstName: string; lastName: string; email: string; phone?: string; industryInterests?: string[]; investmentScale?: string; isActive?: boolean; createdAt?: string; }[]>('http://192.168.151.227:3000/investors/');
        setInvestors(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch investors');
        setLoading(false);
        console.error(err);
      }
    };

    fetchInvestors();
  }, []);

  // Format investor name from firstName and lastName
  const getInvestorName = (investor) => {
    return `${investor.firstName} ${investor.lastName}`;
  };

  // Get industry interests as domain
  const getInvestorDomain = (investor) => {
    if (!investor.industryInterests || investor.industryInterests.length === 0) {
      return 'Not specified';
    }
    return investor.industryInterests.join(', ');
  };

  // Filter investors based on search query and selected domain
  const filteredInvestors = investors.filter(investor => {
    const matchesSearch = searchQuery === '' || 
      getInvestorName(investor).toLowerCase().includes(searchQuery.toLowerCase()) ||
      (investor.industryInterests && investor.industryInterests.some(interest => 
        interest.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesDomain = selectedDomain === 'All' || 
      (investor.industryInterests && investor.industryInterests.includes(selectedDomain));
    
    return matchesSearch && matchesDomain;
  });

  // Render investor card
  const renderInvestorCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => {
        setSelectedInvestor(item);
        setDetailModalVisible(true);
      }}
    >
      <View style={styles.cardHeader}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{item.firstName[0]}</Text>
        </View>
        <View style={styles.cardHeaderText}>
          <Text style={styles.investorName}>{getInvestorName(item)}</Text>
          <Text style={styles.investorDomain}>{getInvestorDomain(item)}</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.contactInfo}>{item.email}</Text>
        <Text style={styles.contactInfo}>{item.phone}</Text>
        <Text style={styles.investmentRange}>Investment Scale: {item.investmentScale || 'Not specified'}</Text>
      </View>
      <TouchableOpacity 
        style={styles.pitchButton}
        onPress={() => {
          setSelectedInvestor(item);
          setChatModalVisible(true);
        }}
      >
        <Text style={styles.pitchButtonText}>Pitch Now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  // Investor Detail Modal
  const renderInvestorDetailModal = () => (
    <Modal
      visible={detailModalVisible}
      animationType="slide"
      transparent={false}
      onRequestClose={() => setDetailModalVisible(false)}
    >
      {selectedInvestor && (
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setDetailModalVisible(false)}>
              <ArrowLeft size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Investor Profile</Text>
            <View style={{ width: 24 }} />
          </View>

          <ScrollView style={styles.detailContainer}>
            <View style={styles.detailHeader}>
              <View style={styles.largeAvatarContainer}>
                <Text style={styles.largeAvatarText}>{selectedInvestor.firstName[0]}</Text>
              </View>
              <Text style={styles.detailName}>{getInvestorName(selectedInvestor)}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.sectionTitle}>Contact Information</Text>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Email:</Text>
                <Text style={styles.detailValue}>{selectedInvestor.email}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Phone:</Text>
                <Text style={styles.detailValue}>{selectedInvestor.phone || 'Not provided'}</Text>
              </View>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.sectionTitle}>Investment Details</Text>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Industry Interests:</Text>
                <Text style={styles.detailValue}>{getInvestorDomain(selectedInvestor)}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Investment Scale:</Text>
                <Text style={styles.detailValue}>{selectedInvestor.investmentScale || 'Not specified'}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Active Status:</Text>
                <Text style={styles.detailValue}>{selectedInvestor.isActive ? 'Active' : 'Inactive'}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Member Since:</Text>
                <Text style={styles.detailValue}>
                  {selectedInvestor.createdAt ? new Date(selectedInvestor.createdAt).toLocaleDateString() : 'Not available'}
                </Text>
              </View>
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity 
                style={[styles.actionButton, styles.messageButton]}
                onPress={() => {
                  setDetailModalVisible(false);
                  setChatModalVisible(true);
                }}
              >
                <MessageCircle size={20} color="#fff" />
                <Text style={styles.actionButtonText}>Message</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.actionButton, styles.calendarButton]}
                onPress={() => {
                  setDetailModalVisible(false);
                  setCalendarModalVisible(true);
                }}
              >
                <Calendar size={20} color="#fff" />
                <Text style={styles.actionButtonText}>Book Meeting</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </Modal>
  );

  // Chat Modal (Whatsapp-like interface)
  const renderChatModal = () => (
    <Modal
      visible={chatModalVisible}
      animationType="slide"
      transparent={false}
      onRequestClose={() => setChatModalVisible(false)}
    >
      {selectedInvestor && (
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setChatModalVisible(false)}>
              <ArrowLeft size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Chat with {getInvestorName(selectedInvestor)}</Text>
            <View style={{ width: 24 }} />
          </View>

          <View style={styles.chatContainer}>
            {/* Chat messages would go here - implement as needed */}
            <Text style={styles.chatPlaceholder}>
              Start a conversation with {getInvestorName(selectedInvestor)}.
              This is where your chat interface would be implemented.
            </Text>
          </View>

          <View style={styles.chatInputContainer}>
            <TextInput
              style={styles.chatInput}
              placeholder="Type your message..."
              multiline
            />
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Modal>
  );

  // Calendar Modal for booking meetings
  const renderCalendarModal = () => (
    <Modal
      visible={calendarModalVisible}
      animationType="slide"
      transparent={false}
      onRequestClose={() => setCalendarModalVisible(false)}
    >
      {selectedInvestor && (
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setCalendarModalVisible(false)}>
              <ArrowLeft size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Book Meeting with {getInvestorName(selectedInvestor)}</Text>
            <View style={{ width: 24 }} />
          </View>

          <View style={styles.calendarContainer}>
            <Text style={styles.calendarPlaceholder}>
              This is where the calendar interface would be implemented.
              Organizations can view available slots and book meetings.
            </Text>
            {/* Implement your calendar component here */}
          </View>
        </View>
      )}
    </Modal>
  );

  // Loading and error states
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text>Loading investors...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
        data={filteredInvestors}
        renderItem={renderInvestorCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No investors found</Text>
          </View>
        }
      />

      {/* Modals */}
      {renderInvestorDetailModal()}
      {renderChatModal()}
      {renderCalendarModal()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#0066cc',
    borderRadius: 8,
    padding: 12,
    paddingHorizontal: 24,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
  emptyContainer: {
    padding: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
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
  contactInfo: {
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
  
  // Modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  // Detail modal styles
  detailContainer: {
    flex: 1,
    padding: 16,
  },
  detailHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  largeAvatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#0066cc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  largeAvatarText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  detailName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  detailSection: {
    marginBottom: 24,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  detailItem: {
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 40,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 12,
    flex: 1,
    marginHorizontal: 8,
  },
  messageButton: {
    backgroundColor: '#0066cc',
  },
  calendarButton: {
    backgroundColor: '#00a86b',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  
  // Chat modal styles
  chatContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  chatPlaceholder: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
  },
  chatInputContainer: {
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    backgroundColor: '#fff',
  },
  chatInput: {
    flex: 1,
    backgroundColor: '#f1f3f5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxHeight: 80,
  },
  sendButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#0066cc',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
  // Calendar modal styles
  calendarContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  calendarPlaceholder: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
  },
});