import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { getPrescriptionList } from '../utils/api';

const MedicationList = ({ User }) => {
  const [medicationList, setMedicationList] = useState([]);

  useEffect(() => {
    getPrescriptionList(User._id).then((res) => {
      setMedicationList(res.prescriptions);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {medicationList.map((medicine) => {
          return (
            <View>
              {Object.keys(medicine).map((key) => {
                return <Text>{medicine[key]}</Text>;
              })}
              {/* <Text>{medicine.name}</Text>
              <Text>{medicine.frequency}</Text>
              <Text>{medicine.dosage}</Text>
              <Text>{medicine.amount}</Text>
              <Text>{medicine.notes}</Text> */}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

//styles to see the data more clearly

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});

export default MedicationList;
