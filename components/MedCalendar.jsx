import { Text, View, ScrollView } from 'react-native';
import { MedCalendarStyles } from '../styles/Styles';

export default function MedCalendar() {
  const Medication = [
    {
      name: 'Drug One',
      time: 1651828045572,
      amount: 40,
      frequency: 840000,
    },
    {
      name: 'Drug Two',
      time: 1651828045572,
      amount: 4,
      frequency: 840000,
    },
  ];
  const Reminders = [];
  for (let i = 0; i < Medication.length; i++) {
    for (let x = 0; x < Medication[i].amount; x++) {
      Reminders.push(
        <View
          key={
            getDate(Medication[i].time, Medication[i].frequency, x, false) + i
          }
        >
          <View style={[MedCalendarStyles.container, MedCalendarStyles.flex]}>
            <View style={MedCalendarStyles.leftCol}>
              <Text>
                {getDay(
                  getDate(Medication[i].time, Medication[i].frequency, x, false)
                )}
              </Text>
            </View>
            <View style={MedCalendarStyles.rightCol}>
              <Text>{Medication[i].name} at </Text>
              <Text>
                {getDate(Medication[i].time, Medication[i].frequency, x, true)}
              </Text>
            </View>
          </View>
        </View>
      );
    }
  }
  Reminders.sort((a, b) => a.key - b.key);
  function getDate(date, frequency, days, humanDate) {
    const addedDays = frequency * days;
    const result = date + addedDays;
    if (humanDate == true) {
      const humanTime = new Date(result);
      let humanMins = humanTime.getMinutes();
      if (humanMins < 10) {
        humanMins = '' + 0 + humanMins;
      }
      const humanDate =
        humanTime.getHours() +
        ':' +
        humanMins +
        ' on ' +
        humanTime.getDate() +
        '/' +
        (humanTime.getMonth() + 1);
      return humanDate;
    } else {
      return result;
    }
  }
  function getDay(timestamp) {
    const timestampDate = new Date(timestamp);
    const dateNow = new Date(Date.now());
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dayOfWeek = days[timestampDate.getDay()];
    const humanTimestampDate =
      '' +
      timestampDate.getFullYear() +
      timestampDate.getMonth() +
      timestampDate.getDate();
    const humanDateNow =
      '' + dateNow.getFullYear() + dateNow.getMonth() + dateNow.getDate();
    const timestampDateNum = parseInt(humanTimestampDate);
    const dateNowNum = parseInt(humanDateNow);

    if (timestampDateNum == dateNowNum) {
      return 'Today';
    } else if (timestampDateNum == dateNowNum + 1) {
      return 'Tomorrow';
    }
    return dayOfWeek;
  }
  return (
    <ScrollView
      style={[MedCalendarStyles.container, MedCalendarStyles.outerContainer]}
    >
      {Reminders}
    </ScrollView>
  );
}
