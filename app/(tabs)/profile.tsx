// import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { MapPin, Globe, Users, Mail, Phone, CreditCard as Edit2 } from 'lucide-react-native';

// const MOCK_PROFILE = {
//   companyName: 'TechStart Solutions',
//   logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
//   description: 'Leading provider of AI-powered business solutions. We help companies automate their operations and improve efficiency through cutting-edge technology.',
//   location: 'San Francisco, CA',
//   website: 'www.techstart.com',
//   employees: '50-100',
//   email: 'contact@techstart.com',
//   phone: '+1 (555) 123-4567',
//   ceo: {
//     name: 'Sarah Anderson',
//     title: 'CEO & Founder',
//     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   stats: {
//     campaigns: 3,
//     totalRaised: '$2.5M',
//     investors: 150,
//   },
// };

// export default function Profile() {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Image source={{ uri: MOCK_PROFILE.coverImage }} style={styles.coverImage} />
//         <View style={styles.headerContent}>
//           <Image source={{ uri: MOCK_PROFILE.logo }} style={styles.logo} />
//           <View style={styles.headerText}>
//             <Text style={styles.companyName}>{MOCK_PROFILE.companyName}</Text>
//             <TouchableOpacity style={styles.editButton}>
//               <Edit2 size={16} color="#fff" />
//               <Text style={styles.editButtonText}>Edit Profile</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>

//       <View style={styles.content}>
//         <View style={styles.section}>
//           <Text style={styles.description}>{MOCK_PROFILE.description}</Text>
          
//           <View style={styles.infoList}>
//             <View style={styles.infoItem}>
//               <MapPin size={16} color="#666" />
//               <Text style={styles.infoText}>{MOCK_PROFILE.location}</Text>
//             </View>
//             <View style={styles.infoItem}>
//               <Globe size={16} color="#666" />
//               <Text style={styles.infoText}>{MOCK_PROFILE.website}</Text>
//             </View>
//             <View style={styles.infoItem}>
//               <Users size={16} color="#666" />
//               <Text style={styles.infoText}>{MOCK_PROFILE.employees} employees</Text>
//             </View>
//             <View style={styles.infoItem}>
//               <Mail size={16} color="#666" />
//               <Text style={styles.infoText}>{MOCK_PROFILE.email}</Text>
//             </View>
//             <View style={styles.infoItem}>
//               <Phone size={16} color="#666" />
//               <Text style={styles.infoText}>{MOCK_PROFILE.phone}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Leadership</Text>
//           <View style={styles.leadershipCard}>
//             <Image source={{ uri: MOCK_PROFILE.ceo.avatar }} style={styles.ceoAvatar} />
//             <View style={styles.ceoInfo}>
//               <Text style={styles.ceoName}>{MOCK_PROFILE.ceo.name}</Text>
//               <Text style={styles.ceoTitle}>{MOCK_PROFILE.ceo.title}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Statistics</Text>
//           <View style={styles.statsContainer}>
//             <View style={styles.statCard}>
//               <Text style={styles.statValue}>{MOCK_PROFILE.stats.campaigns}</Text>
//               <Text style={styles.statLabel}>Campaigns</Text>
//             </View>
//             <View style={styles.statCard}>
//               <Text style={styles.statValue}>{MOCK_PROFILE.stats.totalRaised}</Text>
//               <Text style={styles.statLabel}>Total Raised</Text>
//             </View>
//             <View style={styles.statCard}>
//               <Text style={styles.statValue}>{MOCK_PROFILE.stats.investors}</Text>
//               <Text style={styles.statLabel}>Investors</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     backgroundColor: '#fff',
//   },
//   coverImage: {
//     width: '100%',
//     height: 200,
//   },
//   headerContent: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     padding: 16,
//     marginTop: -40,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     borderRadius: 12,
//     borderWidth: 4,
//     borderColor: '#fff',
//   },
//   headerText: {
//     flex: 1,
//     marginLeft: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   companyName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//   },
//   editButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#0066cc',
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   editButtonText: {
//     color: '#fff',
//     marginLeft: 4,
//     fontSize: 14,
//   },
//   content: {
//     padding: 16,
//   },
//   section: {
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
//   description: {
//     fontSize: 14,
//     color: '#1a1a1a',
//     lineHeight: 20,
//     marginBottom: 16,
//   },
//   infoList: {
//     gap: 12,
//   },
//   infoItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   infoText: {
//     marginLeft: 8,
//     fontSize: 14,
//     color: '#666',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//     marginBottom: 16,
//   },
//   leadershipCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   ceoAvatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 16,
//   },
//   ceoInfo: {
//     flex: 1,
//   },
//   ceoName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//   },
//   ceoTitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   statCard: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 12,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 8,
//     marginHorizontal: 4,
//   },
//   statValue: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#0066cc',
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 12,
//     color: '#666',
//   },
// });


import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, Modal, FlatList } from 'react-native';
import { MapPin, Globe, Users, Mail, Phone, CreditCard as Edit2, AlertCircle, Upload, X, Check, File } from 'lucide-react-native';
import { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';

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
  isVerified: false, // Added verification status flag
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
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDocuments, setSelectedDocuments] = useState<DocumentPicker.DocumentPickerResult[]>([]);
  
  // Function to handle document selection
  const selectDocuments = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
        multiple: true
      });
      
      if (result.canceled === false && result.assets) {
        // Add selected documents to the list
        setSelectedDocuments([
                  ...selectedDocuments,
                  ...(result.assets.map(asset => ({
                    type: 'success',
                    name: asset.name || '',
                    uri: asset.uri || '',
                    size: asset.size || 0,
                  } as unknown as DocumentPicker.DocumentPickerResult))),
                ]);
      }
    } catch (error) {
      console.log('Error picking document:', error);
    }
  };
  
  // Function to remove a document from the list
  const removeDocument = (indexToRemove) => {
    setSelectedDocuments(selectedDocuments.filter((_, index) => index !== indexToRemove));
  };
  
  // Function to handle document submission
  const submitDocuments = () => {
    // TODO: Implement document upload to servers
    // This would include API calls to upload the documents
    console.log('Documents to upload:', selectedDocuments);
    
    // Close modal and reset selections after submission
    setModalVisible(false);
    setSelectedDocuments([]);
    
    // Show confirmation (in a real implementation, you might want to show a toast message)
    alert('Documents submitted successfully. You will be updated on the verification status within 4-5 business days.');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header section with enhanced UI */}
      <View style={styles.header}>
        <Image source={{ uri: MOCK_PROFILE.coverImage }} style={styles.coverImage} />
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <Image source={{ uri: MOCK_PROFILE.logo }} style={styles.logo} />
            {!MOCK_PROFILE.isVerified && (
              <View style={styles.verificationBadge}>
                <AlertCircle size={14} color="#f59e0b" />
              </View>
            )}
          </View>
          <View style={styles.headerText}>
            <View style={styles.nameContainer}>
              <Text style={styles.companyName}>{MOCK_PROFILE.companyName}</Text>
              {!MOCK_PROFILE.isVerified && (
                <View style={styles.unverifiedBadge}>
                  <Text style={styles.unverifiedText}>Unverified</Text>
                </View>
              )}
            </View>
            <View style={styles.headerButtons}>
              {!MOCK_PROFILE.isVerified && (
                <TouchableOpacity 
                  style={styles.verifyButton}
                  onPress={() => setModalVisible(true)}
                >
                  <Check size={16} color="#fff" />
                  <Text style={styles.verifyButtonText}>Get Verified</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity style={styles.editButton}>
                <Edit2 size={16} color="#fff" />
                <Text style={styles.editButtonText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
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

      {/* Verification Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Verify Your Business</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X size={24} color="#666" />
              </TouchableOpacity>
            </View>
            
            <Text style={styles.modalDescription}>
              Select & upload documents to get verified, you'll be updated on the status within next 4-5 business days
            </Text>
            
            <View style={styles.documentTypes}>
              <Text style={styles.documentTypesTitle}>Required Documents:</Text>
              <Text style={styles.documentTypeItem}>• MSME certificate</Text>
              <Text style={styles.documentTypeItem}>• GSTIN information</Text>
              <Text style={styles.documentTypeItem}>• TAN information</Text>
              <Text style={styles.documentTypeItem}>• Other related business documents</Text>
            </View>
            
            <TouchableOpacity style={styles.selectButton} onPress={selectDocuments}>
              <Upload size={20} color="#fff" />
              <Text style={styles.selectButtonText}>Select Documents</Text>
            </TouchableOpacity>
            
            {selectedDocuments.length > 0 && (
              <View style={styles.documentList}>
                <Text style={styles.documentListTitle}>Selected Documents:</Text>
                <FlatList
                  data={selectedDocuments}
                  renderItem={({ item, index }) => (
                    <View style={styles.documentItem}>
                      <View style={styles.documentInfo}>
                        <File size={16} color="#0066cc" />
                        <Text style={styles.documentName} numberOfLines={1}>
                          {item.name}
                        </Text>
                      </View>
                      <TouchableOpacity onPress={() => removeDocument(index)}>
                        <X size={16} color="#f43f5e" />
                      </TouchableOpacity>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  style={styles.documentFlatList}
                />
              </View>
            )}
            
            <View style={styles.modalFooter}>
              <TouchableOpacity 
                style={[
                  styles.submitButton, 
                  selectedDocuments.length === 0 && styles.disabledButton
                ]}
                onPress={submitDocuments}
                disabled={selectedDocuments.length === 0}
              >
                <Text style={styles.submitButtonText}>Submit for Verification</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
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
  logoContainer: {
    position: 'relative',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderWidth: 4,
    borderColor: '#fff',
  },
  verificationBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f59e0b',
  },
  headerText: {
    flex: 1,
    marginLeft: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  companyName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  unverifiedBadge: {
    backgroundColor: '#fff8e1',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#f59e0b',
  },
  unverifiedText: {
    fontSize: 12,
    color: '#f59e0b',
    fontWeight: '600',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    fontWeight: '500',
  },
  verifyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#15803d',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  verifyButtonText: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
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
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  modalDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  documentTypes: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  documentTypesTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  documentTypeItem: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  selectButton: {
    flexDirection: 'row',
    backgroundColor: '#0066cc',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  documentList: {
    marginBottom: 16,
  },
  documentListTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  documentFlatList: {
    maxHeight: 150,
  },
  documentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f1f5f9',
    borderRadius: 6,
    marginVertical: 4,
  },
  documentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  documentName: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
    flex: 1,
  },
  modalFooter: {
    marginTop: 8,
  },
  submitButton: {
    backgroundColor: '#15803d',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#d1d5db',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});