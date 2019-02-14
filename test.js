function checkAvailableTime(timezone, earliest, latest) {
  const [hourEarliest, minuteEarliest] = earliest.split(':');
  const [hourLatest, minuteLatest] = latest.split(':');

  // Timezone
  let earliestPickUpTime = moment(new Date())
    .utcOffset(timezone * 60)
    .set({
      hours: hourEarliest,
      minutes: minuteEarliest
    });
  console.log('earliestPickUpTime1', earliestPickUpTime);
  console.log('latestPickUpTime1', latestPickUpTime);
  let latestPickUpTime = moment(new Date())
    .utcOffset(timezone * 60)
    .set({ hour: hourLatest, minute: minuteLatest });
  const timeDiff = moment(earliestPickUpTime.toDate()).diff(
    latestPickUpTime.toDate(),
    'seconds'
  );

  console.log('timeDiff1', timeDiff);

  const now = moment(new Date()).utcOffset(timezone * 60);

  if (timeDiff > 0) {
    const timeDiffSinceEarliestPickupTime = moment(now.toDate()).diff(
      earliestPickUpTime.toDate(),
      'seconds'
    );

    console.log(
      'timeDiffSinceEarliestPickupTime',
      timeDiffSinceEarliestPickupTime
    );

    if (timeDiffSinceEarliestPickupTime < 0) {
      earliestPickUpTime = moment(new Date())
        .utcOffset(timezone * 60)
        .subtract(1, 'days')
        .set({
          hours: hourLatest,
          minute: minuteLatest
        });
      console.log('earliestPickUpTime2', earliestPickUpTime);
    } else {
      latestPickUpTime = moment(new Date())
        .utcOffset(timezone * 60)
        .add(1, 'days')
        .set({
          hours: hourLatest,
          minute: minuteLatest
        });
      console.log('latestPickUpTime2', latestPickUpTime);
    }
  }
  return now.isBetween(earliestPickUpTime, latestPickUpTime);
}

checkAvailableTime(8, '20:00', '04:00');

var origParseFloat = parseFloat;
parseFloat = function(str) {
  alert("And I'm in your floats!");
  return origParseFloat(str);
};
