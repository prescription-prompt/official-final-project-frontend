import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { getPrescriptionList } from '../utils/api';

const MedicationList = ({ User }) => {
  const [medicationList, setMedicationList] = useState([]);

  useEffect(() => {
    getPrescriptionList(User._id).then((res) => {
      setMedicationList(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {medicationList.map((medicine) => {
          return (
            <View style={styles.yes}>
              <Text>Name: {medicine.name}</Text>
              <Text>Dosage: {medicine.dosage}</Text>
              <Text>Amount: {medicine.amount}</Text>
              <Text>Notes: {medicine.notes}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  yes: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    marginBottom: 20,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});

export default MedicationList;
