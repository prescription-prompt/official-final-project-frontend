import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const MedicationList = () => {
  const [medicationList, setMedicationList] = useState([]);

  //   useEffect(() => {
  //       //fetchMedication api request.then(res => {
  //setMedicationList(res.something)
  //       })
  //   });

  return (
    <View style={styles.container}>
      <ScrollView>
        {medicationList.map((medicine) => {
          return (
            <View>
              <Text>{medicine.name}</Text>
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
