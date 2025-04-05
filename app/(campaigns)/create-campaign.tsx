import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Campaign } from '../../types/campaign';

export default function CreateCampaign() {
  const [formData, setFormData] = useState<Partial<Campaign>>({
    title: '',
    company: '',
    description: '',
    targetAmount: 0,
    equity: 0,
    minimumInvestment: 0,
    businessPlan: '',
    financialProjections: '',
    teamInfo: '',
    marketAnalysis: '',
    riskFactors: '',
  });

  const handleSubmit = async () => {
    try {
      // TODO: Backend Integration
      // 1. Upload image to storage service
      // 2. Send campaign data to API
      // const response = await api.post('/campaigns', formData);
      // 3. Handle success/error
      router.back();
    } catch (error) {
      console.error('Error creating campaign:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Create Funding Campaign</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Campaign Title</Text>
          <TextInput
            style={styles.input}
            value={formData.title}
            onChangeText={(text) => setFormData({ ...formData, title: text })}
            placeholder="Enter campaign title"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Company Name</Text>
          <TextInput
            style={styles.input}
            value={formData.company}
            onChangeText={(text) => setFormData({ ...formData, company: text })}
            placeholder="Enter company name"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={formData.description}
            onChangeText={(text) => setFormData({ ...formData, description: text })}
            placeholder="Describe your campaign"
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Target Amount ($)</Text>
          <TextInput
            style={styles.input}
            value={formData.targetAmount?.toString()}
            onChangeText={(text) => setFormData({ ...formData, targetAmount: parseFloat(text) || 0 })}
            placeholder="Enter target amount"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Equity Offered (%)</Text>
          <TextInput
            style={styles.input}
            value={formData.equity?.toString()}
            onChangeText={(text) => setFormData({ ...formData, equity: parseFloat(text) || 0 })}
            placeholder="Enter equity percentage"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Minimum Investment ($)</Text>
          <TextInput
            style={styles.input}
            value={formData.minimumInvestment?.toString()}
            onChangeText={(text) => setFormData({ ...formData, minimumInvestment: parseFloat(text) || 0 })}
            placeholder="Enter minimum investment amount"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Business Plan</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={formData.businessPlan}
            onChangeText={(text) => setFormData({ ...formData, businessPlan: text })}
            placeholder="Enter your business plan"
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Financial Projections</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={formData.financialProjections}
            onChangeText={(text) => setFormData({ ...formData, financialProjections: text })}
            placeholder="Enter financial projections"
            multiline
            numberOfLines={4}
          />
        </View>

        {/* <View style={styles.inputGroup}>
          <Text style={styles.label}>Team Information</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={formData.teamInfo}
            onChangeText={(text) => setFormData({ ...formData, teamInfo: text })}
            placeholder="Enter team information"
            multiline
            numberOfLines={4}
          />
        </View> */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Market Analysis</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={formData.marketAnalysis}
            onChangeText={(text) => setFormData({ ...formData, marketAnalysis: text })}
            placeholder="Enter market analysis"
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Risk Factors</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={formData.riskFactors}
            onChangeText={(text) => setFormData({ ...formData, riskFactors: text })}
            placeholder="Enter risk factors"
            multiline
            numberOfLines={4}
          />
        </View>

        {/* TODO: Add image upload functionality */}
        
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Create Campaign</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  form: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#1a1a1a',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#0066cc',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 