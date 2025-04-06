import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Building2, Users, Mail, Lock, Phone, Globe, Briefcase, ArrowLeft, User2Icon } from 'lucide-react-native';
import Profile from '../(tabs)/profile';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '', // was organizationName
    industry: '', // was businessDomain
    numberOfEmployees: '', // was employeeCount
    email: '',
    phone: '',
    password: '',
    website: '',
    location: '',
    businessDescription: '',
    faqs: '', // you may need to adjust this depending on how you're collecting FAQs
  });



  const handleRegister = () => {
    // TODO: Implement registration logic
    router.replace('/(tabs)/pitch-point');
  };

  const [step, setStep] = useState(1);

  const handleNext = async () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Submit form data
      //router.replace('/(tabs)/pitch-point');
      console.log(formData);
      let res = null;
      try {
        res = await axios.post('http://192.168.151.227:3000/orgs/register', formData);
        console.log(res.data);
      }
      catch (err) {
        console.log(err);
      }

      if (res && res.data) {
        router.replace({
          pathname: '/(tabs)/pitch-point',
          params: { user : JSON.stringify(res.data) },
        });
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => step > 1 ? setStep(step - 1) : router.back()}
      >
        <ArrowLeft color="#333" size={24} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>Create Business Account</Text>
        <Text style={styles.subtitle}>Join the entrepreneur network</Text>
      </View>

      <View style={styles.form}>
      <View style={styles.stepIndicator}>
          {[1, 2].map((num) => (
            <View
              key={num}
              style={[
                styles.stepDot,
                num === step && styles.activeStepDot,
                num < step && styles.completedStepDot,
              ]}
            />
          ))}
        </View>

      {step === 1 && (
        <>
          <View style={styles.inputContainer}>
            <Building2 size={20} color="#666" />
            <TextInput
              style={styles.input}
              placeholder="Organization Name"
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
          </View>
      
          <View style={styles.inputContainer}>
            <Briefcase size={20} color="#666" />
            <TextInput
              style={styles.input}
              placeholder="Business Domain"
              value={formData.industry}
              onChangeText={(text) => setFormData({ ...formData, industry: text })}
            />
          </View>

          {/* <View style={styles.inputContainer}>
            <User2Icon size={20} color="#666" />
              <TextInput
                style={styles.input}
                placeholder="Name of Founder"
                value={formData.founder}
                onChangeText={(text) => setFormData({ ...formData, founder: text })}
              />
          </View> */}

          <View style={styles.inputContainer}>
            <Phone size={20} color="#666" />
              <TextInput
                style={styles.input}
                placeholder="Business Phone"
                keyboardType="phone-pad"
                value={formData.phone}
                onChangeText={(text) => setFormData({ ...formData, phone: text })}
              />
          </View>

          <View style={styles.inputContainer}>
            <Mail size={20} color="#666" />
            <TextInput
              style={styles.input}
              placeholder="Business Email"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
          </View>
        </>
      )}

      {step === 2 && (
        <>
        <View style={styles.inputContainer}>
          <Users size={20} color="#666" />
          <TextInput
            style={styles.input}
            placeholder="Number of Employees"
            keyboardType="number-pad"
            value={formData.numberOfEmployees}
            onChangeText={(text) => setFormData({ ...formData, numberOfEmployees: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Lock size={20} color="#666" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
          />
        </View>


        <View style={styles.inputContainer}>
          <Globe size={20} color="#666" />
          <TextInput
            style={styles.input}
            placeholder="Website (Optional)"
            keyboardType="url"
            value={formData.website}
            onChangeText={(text) => setFormData({ ...formData, website: text })}
          />
        </View>

        <TextInput
          style={styles.textArea}
          placeholder="Business Description"
          multiline
          numberOfLines={4}
          value={formData.businessDescription}
          onChangeText={(text) => setFormData({ ...formData, businessDescription: text })}
        />
        </>
      )}

        <TouchableOpacity 
          style={styles.loginLink}
          onPress={() => router.push('/(auth)/login')}
        >
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {step === 2 ? 'Create acount' : 'Next'}
          </Text>
        </TouchableOpacity>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginTextBold}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 32,
  },
  stepDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E5E5',
  },
  activeStepDot: {
    backgroundColor: '#4A90E2',
    width: 24,
  },
  completedStepDot: {
    backgroundColor: '#4A90E2',
  },
  backButton: {
    padding: 16,
  },
  header: {
    padding: 24,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  nextButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 10
  },
  nextButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  form: {
    padding: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 48,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#666',
  },
  loginTextBold: {
    fontWeight: 'bold',
    color: '#0066cc',
  },
});